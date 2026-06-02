export type Hotspot = {
    id: string;
    pageId: string;
    productId?: string;
    xPct: number; // 0..100
    yPct: number; // 0..100
    label?: string; // Optional override label
    type?: "product" | "link" | "video";
    targetPageId?: string;
    videoUrl?: string;
    widthPct?: number;
    heightPct?: number;
};

export const hotspots: Hotspot[] = [];
