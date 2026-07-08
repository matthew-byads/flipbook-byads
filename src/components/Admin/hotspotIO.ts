import type { Hotspot } from "../../data/hotspots";
import type { Product } from "../../data/products";
import { pages as staticPages, type Page } from "../../data/pages";
import { S3_CONFIG } from "../../config/s3";

const ADMIN_UNLOCKED_KEY = "byads_admin_unlocked_v1";
const PAGES_CONFIG_KEY = "byads_pages_config_v1";
const S3_HOTSPOTS_URL = `https://${S3_CONFIG.bucket}.s3.${S3_CONFIG.region}.amazonaws.com/hotspots.json`;

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
            accessKeyId: S3_CONFIG.accessKeyId,
            secretAccessKey: S3_CONFIG.secretAccessKey,
            sessionToken: S3_CONFIG.sessionToken,
            region: S3_CONFIG.region,
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

/**
 * Resolves the saved page config against the bundled static pages.
 *
 * The saved config is the source of truth for WHICH pages exist, their order,
 * and their labels — so adds and deletes persist. For pages that are still part
 * of the bundled build, we override `src` with the current build's imported URL
 * (bundled asset URLs carry content hashes that change between deploys), while
 * uploaded pages keep their stored (S3) `src`.
 */
export function mergePagesWithStatic(saved: Page[]): Page[] {
    if (!saved || saved.length === 0) return staticPages;
    const staticMap = new Map(staticPages.map((p) => [p.id, p]));
    return saved.map((p) => {
        const bundled = staticMap.get(p.id);
        return bundled ? { ...p, src: bundled.src } : p;
    });
}

/**
 * Uploads a page image to S3 and returns its public URL (or null on failure).
 * Used so admin-added pages persist across reloads instead of dying with the
 * ephemeral blob: URL from URL.createObjectURL.
 */
export async function uploadPageImage(file: File): Promise<string | null> {
    try {
        const { AwsClient } = await import("aws4fetch");
        const aws = new AwsClient({
            accessKeyId: S3_CONFIG.accessKeyId,
            secretAccessKey: S3_CONFIG.secretAccessKey,
            sessionToken: S3_CONFIG.sessionToken,
            region: S3_CONFIG.region,
        });
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
        const key = `pages/${Date.now()}-${safeName}`;
        const url = `https://${S3_CONFIG.bucket}.s3.${S3_CONFIG.region}.amazonaws.com/${key}`;
        const res = await aws.fetch(url, {
            method: "PUT",
            headers: { "Content-Type": file.type || "image/png" },
            body: file,
        });
        return res.ok ? url : null;
    } catch (err) {
        console.error("Failed to upload page image to S3", err);
        return null;
    }
}

export async function loadPagesConfig(): Promise<Page[]> {
    const S3_PAGES_URL = `https://${S3_CONFIG.bucket}.s3.${S3_CONFIG.region}.amazonaws.com/flipbook-pages.json`;
    try {
        const response = await fetch(S3_PAGES_URL, { cache: "no-store" });
        if (response.ok) {
            const data = await response.json();
            return data as Page[];
        }
        if (response.status === 404) {
            const stored = localStorage.getItem(PAGES_CONFIG_KEY);
            return stored ? JSON.parse(stored) : [];
        }
    } catch (err) {
        console.error("Failed to fetch pages config from S3", err);
        const stored = localStorage.getItem(PAGES_CONFIG_KEY);
        return stored ? JSON.parse(stored) : [];
    }
    const stored = localStorage.getItem(PAGES_CONFIG_KEY);
    return stored ? JSON.parse(stored) : [];
}

export async function savePagesConfig(pages: Page[]): Promise<boolean> {
    // Save locally for backward compatibility
    try {
        localStorage.setItem(PAGES_CONFIG_KEY, JSON.stringify(pages));
    } catch (error) {
        console.warn("Failed to save pages config locally", error);
    }
    // Save to S3
    try {
        const { AwsClient } = await import("aws4fetch");
        const aws = new AwsClient({
            accessKeyId: S3_CONFIG.accessKeyId,
            secretAccessKey: S3_CONFIG.secretAccessKey,
            sessionToken: S3_CONFIG.sessionToken,
            region: S3_CONFIG.region,
        });
        const S3_PAGES_URL = `https://${S3_CONFIG.bucket}.s3.${S3_CONFIG.region}.amazonaws.com/flipbook-pages.json`;
        const res = await aws.fetch(S3_PAGES_URL, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(pages),
        });
        return res.ok;
    } catch (err) {
        console.error("Failed to save pages config to S3", err);
        return false;
    }
}
