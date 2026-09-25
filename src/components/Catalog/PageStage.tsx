import { useState, useRef, forwardRef } from "react";
import { type Page } from "../../data/pages";
import { type Hotspot } from "../../data/hotspots";
import { type Product } from "../../data/products";
import { HotspotPin } from "./HotspotPin";
import { ProductPopover } from "./ProductPopover";
import { useProducts } from "../../context/ProductContext";
import { cn } from "../../utils/cn";
import { useMediaQuery } from "../../hooks/useMediaQuery";

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

    // Pinch-to-zoom state (mobile only)
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [isPinching, setIsPinching] = useState(false);
    const initialPinchDistance = useRef<number>(0);
    const initialZoom = useRef<number>(1);
    const lastTouchCenter = useRef({ x: 0, y: 0 });

    const isMobile = useMediaQuery("(max-width: 768px)");

    const internalRef = useRef<HTMLDivElement>(null);
    const { getProduct, allProducts } = useProducts();

    // Zoom/pan reset is handled by React key change on PageStage (key={page.id} in Flipbook)

    const getDistance = (touches: React.TouchList): number => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;
        return Math.sqrt(dx * dx + dy * dy);
    };

    const getCenter = (touches: React.TouchList): { x: number; y: number } => {
        return {
            x: (touches[0].clientX + touches[1].clientX) / 2,
            y: (touches[0].clientY + touches[1].clientY) / 2
        };
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!isMobile || !internalRef.current) return;
        
        if (e.touches.length === 2) {
            // Pinch gesture
            e.preventDefault();
            setIsPinching(true);
            initialPinchDistance.current = getDistance(e.touches);
            initialZoom.current = zoom;
            lastTouchCenter.current = getCenter(e.touches);
        } else if (e.touches.length === 1 && zoom > 1) {
            // Pan gesture (only when zoomed in)
            e.preventDefault();
            lastTouchCenter.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isMobile || !internalRef.current) return;

        if (e.touches.length === 2 && isPinching) {
            // Pinch zoom
            e.preventDefault();
            const currentDistance = getDistance(e.touches);
            const scale = currentDistance / initialPinchDistance.current;
            
            // Only allow zoom IN (scale > 1). 
            // If user tries to zoom OUT (scale < 1), immediately reset to 1x.
            if (scale < 1) {
                setZoom(1);
                setPan({ x: 0, y: 0 });
                setIsPinching(false);
                return;
            }
            
            const newZoom = Math.min(initialZoom.current * scale, 4);
            setZoom(newZoom);

            // Adjust pan to zoom towards center of pinch
            const center = getCenter(e.touches);
            const dx = center.x - lastTouchCenter.current.x;
            const dy = center.y - lastTouchCenter.current.y;
            
            setPan(prev => ({
                x: prev.x + dx * (initialZoom.current / newZoom),
                y: prev.y + dy * (initialZoom.current / newZoom)
            }));
            lastTouchCenter.current = center;
        } else if (e.touches.length === 1 && zoom > 1 && isPinching) {
            // Pan while zoomed
            e.preventDefault();
            const dx = e.touches[0].clientX - lastTouchCenter.current.x;
            const dy = e.touches[0].clientY - lastTouchCenter.current.y;
            
            setPan(prev => ({
                x: prev.x + dx / zoom,
                y: prev.y + dy / zoom
            }));
            lastTouchCenter.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (!isMobile) return;
        
        if (e.touches.length < 2) {
            setIsPinching(false);
        }
        lastTouchCenter.current = { x: 0, y: 0 };
    };

    const handleDoubleTap = (e: React.MouseEvent) => {
        if (!isMobile || !internalRef.current) return;
        
        const rect = internalRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (zoom === 1) {
            // Zoom in to 2x at tap position
            setZoom(2);
            setPan({
                x: -(x - rect.width / 2) * 2 + rect.width / 2,
                y: -(y - rect.height / 2) * 2 + rect.height / 2
            });
        } else {
            // Reset zoom
            setZoom(1);
            setPan({ x: 0, y: 0 });
        }
    };


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

    // Resolve the hotspot to the variants the customer can choose from.
    // New-style with productReferencia: filter by reference only (name may vary by size).
    // New-style without productReferencia: all variants matching the product name.
    // Legacy: the single pinned variant.
    let activeVariants: Product[] = [];
    let activeName = "";
    let activeReferencia: string | undefined;
    if (activeHotspot) {
        if (activeHotspot.productName) {
            activeName = activeHotspot.productName;
            activeReferencia = activeHotspot.productReferencia;
            if (activeReferencia) {
                // Prefer referencia match — name may include size suffixes
                activeVariants = allProducts.filter(
                    (p) => p.referencia === activeReferencia
                );
            } else {
                // No referencia — match by name (exact or prefix with size suffix)
                activeVariants = allProducts.filter(
                    (p) => p.name === activeName || p.name.startsWith(activeName + " ")
                );
            }
        } else if (activeHotspot.productId) {
            const p = getProduct(activeHotspot.productId);
            if (p) {
                activeVariants = [p];
                activeName = p.name;
                activeReferencia = p.referencia;
            }
        }

        // Apply size lock if the hotspot has a pinned productSize
        if (activeHotspot.productSize && activeVariants.length > 0) {
            activeVariants = activeVariants.filter(
                (p) => p.tamaño === activeHotspot.productSize || p.talla === activeHotspot.productSize
            );
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
            onDoubleClick={handleDoubleTap}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: isMobile && zoom > 1 ? 'none' : 'auto' }}
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
                    className="w-full h-full object-contain select-none pointer-events-none transition-transform duration-100"
                    style={{
                        backgroundColor: '#f3f4f6',
                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                        transformOrigin: 'center center'
                    }}
                />

                <div className="absolute inset-0" style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: 'center center'
                }}>
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
                            referencia={activeReferencia}
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
