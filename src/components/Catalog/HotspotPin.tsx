import { type Hotspot } from "../../data/hotspots";
import { cn } from "../../utils/cn";

type HotspotPinProps = {
    hotspot: Hotspot;
    onClick: (e: React.MouseEvent) => void;
    isActive?: boolean;
    isAdmin?: boolean;
};

export function HotspotPin({ hotspot, onClick, isActive, isAdmin }: HotspotPinProps) {
    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            className={cn(
                "absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110 z-10",
                isActive ? "scale-110 z-20" : "z-10",
                isAdmin ? "bg-red-500/90 hover:bg-red-600" : "bg-white/90 hover:bg-white"
            )}
            style={{
                left: `${hotspot.xPct}%`,
                top: `${hotspot.yPct}%`,
            }}
            aria-label={hotspot.label || "Product Hotspot"}
        >
            <div
                className={cn(
                    "w-3 h-3 rounded-full",
                    isAdmin ? "bg-white" : "bg-black"
                )}
            />
            {!isAdmin && (
                <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
            )}
        </button>
    );
}
