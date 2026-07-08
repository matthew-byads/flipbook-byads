import type { Vendor } from "../../data/vendors";
import { S3_CONFIG } from "../../config/s3";

const S3_VENDORS_URL =
    `https://${S3_CONFIG.bucket}.s3.${S3_CONFIG.region}.amazonaws.com/vendors.json`;

export async function fetchVendors(): Promise<Vendor[]> {
    try {
        // GET directly from S3 — no API hop needed, vendors.json is publicly readable
        const response = await fetch(S3_VENDORS_URL, { cache: "no-store" });
        if (response.ok) {
            const data = await response.json();
            return data as Vendor[];
        }
        if (response.status === 404) {
            // File doesn't exist yet — return empty list
            return [];
        }
    } catch (err) {
        console.error("Failed to fetch vendors from S3", err);
    }
    return [];
}

export async function saveVendors(vendors: Vendor[]): Promise<boolean> {
    try {
        // PUT directly to S3 — signed with IAM credentials from Vite env vars
        const { AwsClient } = await import("aws4fetch");
        const aws = new AwsClient({
            accessKeyId: S3_CONFIG.accessKeyId,
            secretAccessKey: S3_CONFIG.secretAccessKey,
            region: S3_CONFIG.region,
        });

        const res = await aws.fetch(S3_VENDORS_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(vendors),
        });
        return res.ok;
    } catch (err) {
        console.error("Failed to save vendors to S3", err);
        return false;
    }
}
