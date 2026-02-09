import type { Hotspot } from "../../data/hotspots";
import type { Product } from "../../data/products";
import type { Page } from "../../data/pages";

const ADMIN_HOTSPOTS_KEY = "byads_catalog_hotspots_admin_v1";
const ADMIN_UNLOCKED_KEY = "byads_admin_unlocked_v1";
const PAGES_CONFIG_KEY = "byads_pages_config_v1";

export function loadAdminHotspots(): Hotspot[] {
    try {
        const stored = localStorage.getItem(ADMIN_HOTSPOTS_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn("Failed to load admin hotspots", error);
        return [];
    }
}

export function saveAdminHotspots(hotspots: Hotspot[]) {
    try {
        localStorage.setItem(ADMIN_HOTSPOTS_KEY, JSON.stringify(hotspots));
    } catch (error) {
        console.warn("Failed to save admin hotspots", error);
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
