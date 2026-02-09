export type Product = {
    id: string;
    name: string;
    price?: number;
    currency?: string;
    sku?: string;
    variant?: string;
    image?: string;
    talla?: string;   // Clothing size (e.g. S, M, L)
    tamaño?: string;  // Object size (e.g. 40x50cm)
    color?: string;   // Color name or hex
};

export const products: Product[] = [
    { id: "p1", name: "Classic T-Shirt", price: 25000, sku: "TS-001", variant: "M / White" },
    { id: "p2", name: "Denim Jacket", price: 120000, sku: "DJ-002", variant: "L / Blue" },
    { id: "p3", name: "Running Shoes", price: 180000, sku: "RS-003", variant: "42 / Red" },
    { id: "p4", name: "Leather Bag", price: 85000, sku: "LB-004", variant: "One Size / Brown" },
    { id: "p5", name: "Summer Hat", price: 30000, sku: "SH-005" },
];

export const productById = new Map(products.map(p => [p.id, p]));
