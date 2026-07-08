import { type CartItem } from "./cartTypes";
import { type Product } from "../data/products";
import { getSizeField, getSizeLabel } from "../utils/productSize";

export function getWhatsAppLink(items: CartItem[], getProduct: (id: string) => Product | undefined, vendorPhone?: string, fallbackPhone?: string): string | null {
    const phone = (vendorPhone || fallbackPhone || "").replace(/\D/g, "");

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

        const sizeField = getSizeField([product]);
        const sizeVal = sizeField ? product[sizeField] : undefined;
        const sizeStr = sizeVal ? ` — ${getSizeLabel(sizeField!)}: ${sizeVal}` : "";
        const chosenColor = product.referencia || product.color;
        const colorStr = chosenColor ? ` — Color: ${chosenColor}` : "";
        const variant = product.variant ? ` [${product.variant}]` : "";
        const origin = item.pageId ? ` _(Pág. ${item.pageId})_` : "";

        // Format: "• 2 x Producto — $Price = $Total — Tamaño: X — Color: Y [Var] (Page)"
        return `• *${item.quantity} x* ${product.name}${priceStr}${lineTotal}${sizeStr}${colorStr}${variant}${origin}`;
    });



    let message = `¡Hola! ✌️\nEstoy interesado en pedir estos productos del catálogo:\n\n${lines.join("\n")}`;

    if (hasPricedItems) {
        message += `\n\n*Total Estimado:* ${defaultCurrency} ${total.toLocaleString()} 💰`;
    }

    message += `\n\n¡Quedo atento! Gracias.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
