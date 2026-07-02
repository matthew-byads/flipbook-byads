import type { Hotspot } from "../../data/hotspots";
import type { Product } from "../../data/products";
import type { Page } from "../../data/pages";

const ADMIN_UNLOCKED_KEY = "byads_admin_unlocked_v1";
const PAGES_CONFIG_KEY = "byads_pages_config_v1";
const S3_HOTSPOTS_URL = "https://flipbook-four-elements.s3.us-east-2.amazonaws.com/hotspots.json";

export async function fetchHotspots(): Promise<Hotspot[]> {
    try {
        const response = await fetch(S3_HOTSPOTS_URL, { cache: "no-store" });
        if (response.ok) {
            const data = await response.json();
            return data as Hotspot[];
        }
        if (response.status === 404) {
            return [];
        }
    } catch (err) {
        console.error("Failed to fetch hotspots from S3", err);
    }
    return [];
}

export async function saveHotspotsToS3(hotspots: Hotspot[]): Promise<boolean> {
    try {
        const { AwsClient } = await import("aws4fetch");
        const aws = new AwsClient({
            accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
            secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
            region: import.meta.env.VITE_AWS_REGION || "us-east-2",
        });

        const res = await aws.fetch(S3_HOTSPOTS_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(hotspots),
        });

        return res.ok;
    } catch (err) {
        console.error("Failed to save hotspots to S3", err);
        return false;
    }
}

export function isAdminUnlocked(): boolean {
    return localStorage.getItem(ADMIN_UNLOCKED_KEY) === "true";
}

export function setAdminUnlocked(unlocked: boolean) {
    if (unlocked) {
        localStorage.setItem(ADMIN_UNLOCKED_KEY, "true");
    } else {
        localStorage.removeItem(ADMIN_UNLOCKED_KEY); // Clear, don't set false
    }
}

// -- Custom Products --
const CUSTOM_PRODUCTS_KEY = "byads_custom_products_v1";

export function loadCustomProducts(): Product[] {
    try {
        const stored = localStorage.getItem(CUSTOM_PRODUCTS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn("Failed to load custom products", error);
        return [];
    }
}

export function saveCustomProducts(products: Product[]) {
    try {
        localStorage.setItem(CUSTOM_PRODUCTS_KEY, JSON.stringify(products));
    } catch (error) {
        console.warn("Failed to save custom products", error);
    }
}

// -- Pages Config --
export function loadPagesConfig(): Page[] {
    try {
        const stored = localStorage.getItem(PAGES_CONFIG_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn("Failed to load pages config", error);
        return [];
    }
}

export function savePagesConfig(pages: Page[]) {
    try {
        localStorage.setItem(PAGES_CONFIG_KEY, JSON.stringify(pages));
    } catch (error) {
        console.warn("Failed to save pages config", error);
    }
}
