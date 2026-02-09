import { type CartItem } from "./cartTypes";

const CART_KEY = "byads_catalog_cart_v1";

export function loadCart(): CartItem[] {
    try {
        const stored = localStorage.getItem(CART_KEY);
        return stored ? JSON.parse(stored) : [];
    } catch (error) {
        console.warn("Failed to load cart", error);
        return [];
    }
}

export function saveCart(items: CartItem[]) {
    try {
        localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (error) {
        console.warn("Failed to save cart", error);
    }
}
