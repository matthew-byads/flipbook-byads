import { useState, useRef, forwardRef } from "react";
import { type Page } from "../../data/pages";
import { type Hotspot } from "../../data/hotspots";
import { type Product } from "../../data/products";
import { HotspotPin } from "./HotspotPin";
import { ProductPopover } from "./ProductPopover";
import { useProducts } from "../../context/ProductContext";
import { getProductSize } from "../../utils/productSize";
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
    const { getProduct, allProducts } = useProducts();


    const handleHotspotClick = (hotspot: Hotspot) => {
        if (isAdmin) {
            // Admin mode: always open the editor
            onHotspotClick(hotspot);
        } else if (hotspot.type === "link" || hotspot.type === "video") {
            // Navigation / video hotspots: delegate to CatalogViewer
            onHotspotClick(hotspot);
        } else {
            // Regular product hotspot on a detail page: show popover inline
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

    const handleMouseUp = () => {
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
        // If the click originated from a hotspot pin, do not clear activeHotspotId
        // (the pin's own stopPropagation should handle this, but we add an extra guard)
        if ((e.target as HTMLElement).closest('button[data-hotspot-pin]')) return;

        if (isAdmin || activeHotspotId) {
            e.stopPropagation();
        }
        if (activeHotspotId) {
            setActiveHotspotId(null);
        }
    };

    const activeHotspot = hotspots.find(h => h.id === activeHotspotId);

    // Resolve the hotspot to the variants the customer can choose a color from.
    // New-style: all variants matching the product name (+ size when set).
    // Legacy: the single pinned variant.
    let activeVariants: Product[] = [];
    let activeName = "";
    let activeSize: string | undefined;
    if (activeHotspot) {
        if (activeHotspot.productName) {
            activeName = activeHotspot.productName;
            activeSize = activeHotspot.productSize;
            activeVariants = allProducts.filter(
                (p) => p.name === activeName && (!activeSize || getProductSize(p) === activeSize)
            );
        } else if (activeHotspot.productId) {
            const p = getProduct(activeHotspot.productId);
            if (p) {
                activeVariants = [p];
                activeName = p.name;
                activeSize = getProductSize(p);
            }
        }
    }

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

            {activeVariants.length > 0 && activeHotspot && (
                <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none bg-black/20 animate-in fade-in duration-200">
                    <div className="pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                        <ProductPopover
                            variants={activeVariants}
                            name={activeName}
                            size={activeSize}
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
