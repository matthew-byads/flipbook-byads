import { type Hotspot } from "../../data/hotspots";
import { cn } from "../../utils/cn";

type HotspotPinProps = {
    hotspot: Hotspot;
    onClick: (e: React.MouseEvent) => void;
    isActive?: boolean;
    isAdmin?: boolean;
};

export function HotspotPin({ hotspot, onClick, isActive, isAdmin }: HotspotPinProps) {
    const isArea = hotspot.widthPct !== undefined && hotspot.heightPct !== undefined;

    return (
        <button
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}
            className={cn(
                "cursor-pointer absolute flex items-center justify-center z-10 transition-all",
                !isArea && "-translate-x-1/2 -translate-y-1/2 rounded-full",
                isArea ? "rounded-md" : (hotspot.type === "link" ? "w-[10px] h-[10px]" : "w-8 h-8"),
                isAdmin 
                    ? (isArea ? "bg-red-500/30 border border-red-500 hover:bg-red-500/40" : "bg-red-500/90 hover:bg-red-600 shadow-lg hover:scale-110")
                    : (isArea ? "bg-white/20 border border-white/40 hover:bg-white/30" : "bg-white/90 hover:bg-white shadow-lg hover:scale-110"),
                isActive && hotspot.type !== "link" && !isArea ? "scale-110 z-20" : "z-10"
            )}
            style={{
                left: `${hotspot.xPct}%`,
                top: `${hotspot.yPct}%`,
                ...(isArea ? { width: `${hotspot.widthPct}%`, height: `${hotspot.heightPct}%` } : {})
            }}
            aria-label={hotspot.label || "Product Hotspot"}
        >
            {/* Only show center visuals if it's a point hotspot (not an area) */}
            {!isArea && (
                <>
                    {hotspot.type === "link" ? (
                        <svg className={cn("w-2 h-2", isAdmin ? "text-white" : "text-black")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    ) : (
                        <div
                            className={cn(
                                "w-3 h-3 rounded-full",
                                isAdmin ? "bg-white" : "bg-black"
                            )}
                        />
                    )}
                    {!isAdmin && (
                        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping" />
                    )}
                </>
            )}
            
            {/* Show an icon in the center of the area so it's clear what type it is */}
            {isArea && (
                hotspot.type === "link" ? (
                    <svg className={cn("w-6 h-6 opacity-60", isAdmin ? "text-red-600" : "text-white")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                ) : (
                    <div className={cn("w-3 h-3 rounded-full opacity-60", isAdmin ? "bg-red-600" : "bg-white")} />
                )
            )}
        </button>
    );
}
