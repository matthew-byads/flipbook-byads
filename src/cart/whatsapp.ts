import { type CartItem } from "./cartTypes";
import { type Product } from "../data/products";

export function getWhatsAppLink(items: CartItem[], getProduct: (id: string) => Product | undefined): string | null {
    const phone = (import.meta.env.VITE_WHATSAPP_PHONE ?? "").replace(/\D/g, "");

    if (!phone) return null;

    if (items.length === 0) return null;

    const defaultCurrency = import.meta.env.VITE_DEFAULT_CURRENCY || "COP";
    let total = 0;
    let hasPricedItems = false;

    const lines = items.map((item) => {
        const product = getProduct(item.productId);
        if (!product) return `- Issue with product ${item.productId}`;

        const currency = product.currency || defaultCurrency;
        const priceStr = product.price
            ? ` — *${currency} ${product.price.toLocaleString()}*`
            : "";

        let lineTotal = "";
        if (product.price) {
            total += product.price * item.quantity;
            hasPricedItems = true;
            lineTotal = ` = *${currency} ${(product.price * item.quantity).toLocaleString()}*`;
        }

        const sku = product.sku ? ` (Ref: ${product.sku})` : "";
        const variant = product.variant ? ` [${product.variant}]` : "";
        const origin = item.pageId ? ` _(Pág. ${item.pageId})_` : "";

        // Format: "• 2 x Producto — $Price = $Total (Ref) [Var] (Page)"
        return `• *${item.quantity} x* ${product.name}${priceStr}${lineTotal}${sku}${variant}${origin}`;
    });



    let message = `¡Hola! ✌️\nEstoy interesado en pedir estos productos del catálogo:\n\n${lines.join("\n")}`;

    if (hasPricedItems) {
        message += `\n\n*Total Estimado:* ${defaultCurrency} ${total.toLocaleString()} 💰`;
    }

    message += `\n\n¡Quedo atento! Gracias.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
