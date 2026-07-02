import type { Vendor } from "../../data/vendors";

const S3_VENDORS_URL =
    "https://flipbook-four-elements.s3.us-east-2.amazonaws.com/vendors.json";

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
            accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
            secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
            region: import.meta.env.VITE_AWS_REGION || "us-east-2",
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
