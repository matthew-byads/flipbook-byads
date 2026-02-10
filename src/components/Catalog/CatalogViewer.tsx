import { useRef, useState, useEffect, useCallback } from "react";
import { pages as staticPages, type Page } from "../../data/pages";
import { hotspots as initialHotspots, type Hotspot } from "../../data/hotspots";
import { ThumbnailStrip } from "./ThumbnailStrip";
import { loadAdminHotspots, saveAdminHotspots, loadPagesConfig } from "../Admin/hotspotIO";
import { AdminPanel } from "../Admin/AdminPanel";

import { Flipbook } from "./Flipbook";

type CatalogViewerProps = {
    isAdmin: boolean;
};

export function CatalogViewer({ isAdmin }: CatalogViewerProps) {
    const [pageIndex, setPageIndex] = useState(0);
    const [pages, setPages] = useState<Page[]>(() => {
        const custom = loadPagesConfig();
        return custom.length > 0 ? custom : staticPages;
    });

    const flipbookRef = useRef<any>(null);

    const [allHotspots, setAllHotspots] = useState<Hotspot[]>(() => [
        ...initialHotspots,
        ...loadAdminHotspots()
    ]);

    // Reload pages and hotspots when isAdmin changes
    useEffect(() => {
        const custom = loadPagesConfig();
        if (custom.length > 0) setPages(custom);
        setAllHotspots([...initialHotspots, ...loadAdminHotspots()]);
    }, [isAdmin]);

    const page = pages[pageIndex] || pages[0];

    const handleNext = useCallback(() => {
        flipbookRef.current?.pageFlip()?.flipNext();
    }, []);

    const handlePrev = useCallback(() => {
        flipbookRef.current?.pageFlip()?.flipPrev();
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") handleNext();
            if (e.key === "ArrowLeft") handlePrev();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleNext, handlePrev]);

    const handlePageSelect = (id: string) => {
        const index = pages.findIndex(p => p.id === id);
        if (index >= 0) {
            flipbookRef.current?.pageFlip()?.turnToPage(index);
        }
    };

    // Admin State
    const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
    const [draftHotspot, setDraftHotspot] = useState<{ xPct: number; yPct: number; pageId: string } | null>(null);

    // Clear admin state when changing pages
    useEffect(() => {
        setSelectedHotspot(null);
        setDraftHotspot(null);
    }, [pageIndex, isAdmin]);

    const handleUpdateHotspots = (newHotspots: Hotspot[]) => {
        setAllHotspots(newHotspots);
        saveAdminHotspots(newHotspots);
    };

    const handleHotspotClick = (hotspot: Hotspot) => {
        if (isAdmin) {
            setSelectedHotspot(hotspot);
            setDraftHotspot(null);
        }
    };

    const handleStageClick = (pageId: string, xPct: number, yPct: number) => {
        if (isAdmin) {
            setSelectedHotspot(null);
            setDraftHotspot({ xPct, yPct, pageId });
        }
    };

    if (pages.length === 0) return <div className="h-screen flex items-center justify-center">No pages found</div>;

    return (
        <div className="flex flex-col w-full h-screen bg-gray-50 pt-16 pb-20 overflow-hidden relative">
            {/* Main Stage */}
            <div className="flex-1 relative flex items-center justify-center px-4">
                <button
                    onClick={handlePrev}
                    disabled={pageIndex === 0}
                    className="absolute cursor-pointer left-4 z-[70] p-3 rounded-full bg-white/80 hover:bg-white shadow-md disabled:opacity-30 transition-all hover:scale-110"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>

                <div className="w-full h-full max-w-7xl max-h-[calc(100vh-160px)] flex items-center justify-center">
                    <Flipbook
                        ref={flipbookRef}
                        pages={pages}
                        hotspots={allHotspots}
                        isAdmin={isAdmin}
                        onHotspotClick={handleHotspotClick}
                        onStageClick={handleStageClick}
                        onPageChange={setPageIndex}
                        initialPage={0}
                    />
                </div>

                <button
                    onClick={handleNext}
                    disabled={pageIndex >= pages.length - 2}
                    className="absolute cursor-pointer right-4 z-[70] p-3 rounded-full bg-white/80 hover:bg-white shadow-md disabled:opacity-30 transition-all hover:scale-110"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Page indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 py-2 px-6 bg-black/80 backdrop-blur-md text-white rounded-full text-xs font-black tracking-widest shadow-2xl z-[70]">
                    {page.label || `PAGE ${pageIndex + 1}`} / {pages.length}
                </div>
            </div>

            {/* Thumbnails */}
            <ThumbnailStrip
                pages={pages}
                currentPageId={page.id}
                onPageSelect={handlePageSelect}
            />

            {/* Admin Panel Overlay */}
            {isAdmin && (
                <AdminPanel
                    pageId={draftHotspot?.pageId || page.id}
                    visiblePageIds={
                        pageIndex === 0
                            ? [pages[0].id]
                            : [pages[pageIndex]?.id, pages[pageIndex + 1]?.id].filter(Boolean) as string[]
                    }
                    allHotspots={allHotspots}
                    onUpdateHotspots={handleUpdateHotspots}
                    selectedHotspot={selectedHotspot}
                    draftHotspot={draftHotspot}
                    onCloseEditor={() => setSelectedHotspot(null)}
                    onClearDraft={() => setDraftHotspot(null)}
                />
            )}
        </div>
    );
}
