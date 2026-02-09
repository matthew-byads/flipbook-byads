export type Hotspot = {
    id: string;
    pageId: string;
    productId: string;
    xPct: number; // 0..100
    yPct: number; // 0..100
    label?: string; // Optional override label
};

export const hotspots: Hotspot[] = [
    { id: "h1", pageId: "002", productId: "p1", xPct: 30, yPct: 40 },
    { id: "h2", pageId: "002", productId: "p2", xPct: 70, yPct: 60 },
    { id: "h3", pageId: "003", productId: "p3", xPct: 50, yPct: 80 },
    { id: "h4", pageId: "004", productId: "p4", xPct: 20, yPct: 30 },
];
