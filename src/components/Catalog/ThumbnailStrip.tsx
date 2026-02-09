import { useEffect, useRef } from "react";
import { type Page } from "../../data/pages";
import { cn } from "../../utils/cn";

type ThumbnailStripProps = {
    pages: Page[];
    currentPageId: string;
    onPageSelect: (pageId: string) => void;
};

export function ThumbnailStrip({ pages, currentPageId, onPageSelect }: ThumbnailStripProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to active thumbnail
    useEffect(() => {
        if (scrollRef.current) {
            const activeThumb = scrollRef.current.querySelector('[data-active="true"]');
            if (activeThumb) {
                activeThumb.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                });
            }
        }
    }, [currentPageId]);

    return (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur border-t border-gray-100 z-30">
            <div
                ref={scrollRef}
                className="flex items-center h-full overflow-x-auto px-4 gap-2 no-scrollbar"
            >
                {pages.map((page, index) => (
                    <button
                        key={page.id}
                        data-active={page.id === currentPageId}
                        onClick={() => onPageSelect(page.id)}
                        className={cn(
                            "flex-shrink-0 h-14 w-10 rounded-md overflow-hidden border-2 transition-all duration-200 relative group",
                            page.id === currentPageId
                                ? "border-black scale-105 shadow-md"
                                : "border-transparent hover:border-gray-300 opacity-70 hover:opacity-100"
                        )}
                    >
                        <img
                            src={page.src}
                            alt={`Page ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </button>
                ))}
            </div>
        </div>
    );
}
