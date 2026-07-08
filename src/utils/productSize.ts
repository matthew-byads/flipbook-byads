import { type Product } from "../data/products";

export type SizeField = "tamaño" | "talla";

/**
 * Determines which field carries the "size" dimension for a group of variants.
 * Prefers Tamaño; falls back to Talla; returns null when the group has neither.
 */
export function getSizeField(variants: Product[]): SizeField | null {
    if (variants.some((p) => p.tamaño)) return "tamaño";
    if (variants.some((p) => p.talla)) return "talla";
    return null;
}

/** Human-facing label for a size field. */
export function getSizeLabel(field: SizeField): string {
    return field === "tamaño" ? "Tamaño" : "Talla";
}

/** The size value of a single product (Tamaño preferred, then Talla). */
export function getProductSize(product: Product): string | undefined {
    return product.tamaño ?? product.talla;
}

/** Distinct size values available for a group of variants, in first-seen order. */
export function getSizeOptions(variants: Product[]): string[] {
    const field = getSizeField(variants);
    if (!field) return [];
    const values = variants
        .map((p) => p[field])
        .filter((v): v is string => Boolean(v));
    return Array.from(new Set(values));
}
