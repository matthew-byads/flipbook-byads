import { useState, useRef, forwardRef } from "react";
import { type Page } from "../../data/pages";
import { type Hotspot } from "../../data/hotspots";
import { HotspotPin } from "./HotspotPin";
import { ProductPopover } from "./ProductPopover";
import { useProducts } from "../../context/ProductContext";
import { cn } from "../../utils/cn";

type PageStageProps = {
    page: Page;
    hotspots: Hotspot[];
    isAdmin: boolean;
    onHotspotClick: (hotspot: Hotspot) => void;
    onStageClick?: (xPct: number, yPct: number, widthPct?: number, heightPct?: number) => void;
};

export const PageStage = forwardRef<HTMLDivElement, PageStageProps>(({
    page,
    hotspots,
    isAdmin,
    onHotspotClick,
    onStageClick,
}, ref) => {
    const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
    const [drawStart, setDrawStart] = useState<{ xPct: number; yPct: number } | null>(null);
    const [drawCurrent, setDrawCurrent] = useState<{ xPct: number; yPct: number } | null>(null);
    
    const internalRef = useRef<HTMLDivElement>(null);
    const { getProduct } = useProducts();


    const handleHotspotClick = (hotspot: Hotspot) => {
        const indexPages = ["001", "002", "003", "004", "005"];
        const isIndexPage = indexPages.includes(page.id);

        if (isAdmin) {
            onHotspotClick(hotspot);
        } else if (isIndexPage || hotspot.type === "link") {
            onHotspotClick(hotspot);
        } else {
            setActiveHotspotId(activeHotspotId === hotspot.id ? null : hotspot.id);
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!isAdmin || !internalRef.current) return;
        if ((e.target as HTMLElement).closest('button')) return; // Ignore if clicking a hotspot

        const rect = internalRef.current.getBoundingClientRect();
        const xPct = ((e.clientX - rect.left) / rect.width) * 100;
        const yPct = ((e.clientY - rect.top) / rect.height) * 100;

        setDrawStart({ xPct, yPct });
        setDrawCurrent({ xPct, yPct });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isAdmin || !drawStart || !internalRef.current) return;

        const rect = internalRef.current.getBoundingClientRect();
        const xPct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
        const yPct = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));

        setDrawCurrent({ xPct, yPct });
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isAdmin) return;
        if (!drawStart || !drawCurrent) return;

        if (onStageClick) {
            const x = Math.min(drawStart.xPct, drawCurrent.xPct);
            const y = Math.min(drawStart.yPct, drawCurrent.yPct);
            const w = Math.abs(drawStart.xPct - drawCurrent.xPct);
            const h = Math.abs(drawStart.yPct - drawCurrent.yPct);

            if (w < 1 && h < 1) {
                // Click
                onStageClick(drawStart.xPct, drawStart.yPct);
            } else {
                // Area drawn
                onStageClick(x, y, w, h);
            }
        }

        setDrawStart(null);
        setDrawCurrent(null);
    };

    const handleClick = (e: React.MouseEvent) => {
        if (isAdmin || activeHotspotId) {
            e.stopPropagation();
        }
        if (activeHotspotId) {
            setActiveHotspotId(null);
        }
    };

    const activeHotspot = hotspots.find(h => h.id === activeHotspotId);
    const activeProduct = activeHotspot ? getProduct(activeHotspot.productId) : null;

    return (
        <div
            ref={ref}
            className={cn(
                "flex items-center justify-center w-full h-full bg-white",
                isAdmin && "cursor-crosshair"
            )}
            data-density="soft"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={() => { setDrawStart(null); setDrawCurrent(null); }}
            onClick={handleClick}
        >
            <div
                ref={internalRef}
                className={cn(
                    "relative bg-white shadow-xl rounded-sm w-full h-full"
                )}
            >
                <img
                    src={page.src}
                    alt={page.label || `Page ${page.id}`}
                    className="w-full h-full object-contain select-none pointer-events-none"
                    style={{ backgroundColor: '#f3f4f6' }}
                />

                <div className="absolute inset-0">
                    {/* Render active draw area */}
                    {isAdmin && drawStart && drawCurrent && (
                        <div 
                            className="absolute bg-blue-500/20 border border-blue-500 z-50 pointer-events-none"
                            style={{
                                left: `${Math.min(drawStart.xPct, drawCurrent.xPct)}%`,
                                top: `${Math.min(drawStart.yPct, drawCurrent.yPct)}%`,
                                width: `${Math.abs(drawStart.xPct - drawCurrent.xPct)}%`,
                                height: `${Math.abs(drawStart.yPct - drawCurrent.yPct)}%`
                            }}
                        />
                    )}
                    
                    {hotspots.map((hotspot) => (
                        <HotspotPin
                            key={hotspot.id}
                            hotspot={hotspot}
                            isActive={activeHotspotId === hotspot.id}
                            isAdmin={isAdmin}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleHotspotClick(hotspot);
                            }}
                        />
                    ))}
                </div>

            </div>

            {activeProduct && activeHotspot && (
                <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none bg-black/20 animate-in fade-in duration-200">
                    <div className="pointer-events-auto">
                        <ProductPopover
                            product={activeProduct}
                            pageId={page.id}
                            onClose={() => setActiveHotspotId(null)}
                            style={{ position: 'relative' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
});

PageStage.displayName = "PageStage";
