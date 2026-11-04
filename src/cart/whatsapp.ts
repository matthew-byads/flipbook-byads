import { type CartItem } from "./cartTypes";
import { type Product } from "../data/products";

/** Values that carry no useful information for the vendor. */
const EMPTY_VALUES = new Set(["", "no aplica", "n/a", "na", "-"]);

/** Normalize a raw product field: collapse whitespace and drop placeholder values. */
function cleanValue(value?: string): string | undefined {
    if (!value) return undefined;
    const normalized = value.replace(/\s+/g, " ").trim();
    if (!normalized || EMPTY_VALUES.has(normalized.toLowerCase())) return undefined;
    return normalized;
}

/**
 * Build the "Referencia / Color / Talla / Tamaño" section for a product. Every
 * attribute the customer could have picked is preserved so the vendor receives
 * the exact variant, not just the product name.
 *
 * Duplicate values are only printed once (e.g. legacy products where
 * `referencia` and `color` are the same value), and fields equal to the
 * product name are omitted to keep the message readable.
 */
function buildDetails(product: Product): string {
    const details: string[] = [];
    const seen = new Set<string>();

    const push = (icon: string, label: string, value?: string) => {
        const cleaned = cleanValue(value);
        if (!cleaned) return;

        const key = cleaned.toLowerCase();
        if (seen.has(key)) return;
        seen.add(key);

        details.push(`${icon} *${label}:* ${cleaned}`);
    };

    push("🔖", "Referencia", product.referencia);
    push("🎨", "Color", product.color);
    push("📏", "Talla", product.talla);
    push("📐", "Tamaño", product.tamaño);

    if (product.productType && product.productType !== product.name) {
        push("📦", "Tipo", product.productType);
    }
    if (product.variant && product.variant !== product.name) {
        push("🏷", "Variante", product.variant);
    }

    return details.length > 0 ? ` — ${details.join(" · ")}` : "";
}

export function getWhatsAppLink(items: CartItem[], getProduct: (id: string) => Product | undefined, vendorPhone?: string, fallbackPhone?: string): string | null {
    const phone = (vendorPhone || fallbackPhone || "").replace(/\D/g, "");

    if (!phone) return null;

    if (items.length === 0) return null;

    const defaultCurrency = import.meta.env.VITE_DEFAULT_CURRENCY || "COP";
    let total = 0;
    let hasPricedItems = false;

    const lines = items.map((item, index) => {
        const product = getProduct(item.productId);
        if (!product) return `${index + 1}. ⚠️ Producto no disponible (${item.productId})`;

        const currency = product.currency || defaultCurrency;
        const priceStr = product.price
            ? ` — 💵 *${currency} ${product.price.toLocaleString()}* c/u`
            : "";

        let lineTotal = "";
        if (product.price) {
            total += product.price * item.quantity;
            hasPricedItems = true;
            lineTotal = ` = *${currency} ${(product.price * item.quantity).toLocaleString()}*`;
        }

        const details = buildDetails(product);
        const origin = item.pageId ? ` _(Pág. ${item.pageId})_` : "";

        // Format: "1. 2 x Producto — 💵 $Price c/u = $Total — 🔖 Referencia: X · 🎨 Color: Y ... (Page)"
        return `${index + 1}. *${item.quantity} x* ${product.name}${priceStr}${lineTotal}${details}${origin}`;
    });

    const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);
    const productCount = items.length;

    let message = `🛒 *Nuevo pedido desde el catálogo*\n\n¡Hola! 👋 Quisiera ordenar los siguientes productos:\n\n${lines.join("\n")}`;

    message += `\n\n📦 *Resumen:* ${productCount} ${productCount === 1 ? "producto" : "productos"} · ${totalUnits} ${totalUnits === 1 ? "unidad" : "unidades"}`;

    if (hasPricedItems) {
        message += `\n💰 *Total estimado:* ${defaultCurrency} ${total.toLocaleString()}`;
    }

    message += `\n\n🙌 ¡Quedo atento! Gracias.`;

    // api.whatsapp.com/send keeps UTF-8 emoji intact. The wa.me short link can
    // rewrite emoji as U+FFFD (the "�" replacement character) on redirect.
    return `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
}
