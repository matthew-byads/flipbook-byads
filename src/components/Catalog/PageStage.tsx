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
    onStageClick?: (xPct: number, yPct: number) => void;
};

export const PageStage = forwardRef<HTMLDivElement, PageStageProps>(({
    page,
    hotspots,
    isAdmin,
    onHotspotClick,
    onStageClick,
}, ref) => {
    const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);
    const internalRef = useRef<HTMLDivElement>(null);
    const { getProduct } = useProducts();


    const handleHotspotClick = (hotspot: Hotspot) => {
        if (isAdmin) {
            onHotspotClick(hotspot);
        } else {
            setActiveHotspotId(activeHotspotId === hotspot.id ? null : hotspot.id);
        }
    };

    const handleBackgroundClick = (e: React.MouseEvent) => {
        if (isAdmin || activeHotspotId) {
            e.stopPropagation();
        }

        if (activeHotspotId) {
            setActiveHotspotId(null);
            return;
        }

        if (isAdmin && onStageClick && internalRef.current) {
            const rect = internalRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPct = (x / rect.width) * 100;
            const yPct = (y / rect.height) * 100;

            onStageClick(xPct, yPct);
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
            onClick={handleBackgroundClick}
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
