export type Hotspot = {
    id: string;
    pageId: string;
    productId?: string; // Legacy: pins one exact variant (name+color+size)
    productName?: string; // New-style: product group; customer picks the color
    productSize?: string; // New-style: chosen size value (a Tamaño or Talla string)
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
