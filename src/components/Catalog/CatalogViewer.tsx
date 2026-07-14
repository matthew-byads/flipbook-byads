import { useRef, useState, useEffect, useCallback } from "react";
import { pages as staticPages, type Page } from "../../data/pages";
import { hotspots as initialHotspots, type Hotspot } from "../../data/hotspots";
import { ThumbnailStrip } from "./ThumbnailStrip";
import { fetchHotspots, saveHotspotsToS3, loadPagesConfig, mergePagesWithStatic } from "../Admin/hotspotIO";
import { AdminPanel } from "../Admin/AdminPanel";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { VideoPopup } from "./VideoPopup";

import { Flipbook } from "./Flipbook";

type CatalogViewerProps = {
    isAdmin: boolean;
};

export function CatalogViewer({ isAdmin }: CatalogViewerProps) {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [pageIndex, setPageIndex] = useState(0);
    const [pages, setPages] = useState<Page[]>(staticPages);
    const [isLoading, setIsLoading] = useState(true);

    const flipbookRef = useRef<any>(null);

    const [allHotspots, setAllHotspots] = useState<Hotspot[]>(initialHotspots);

    // Load custom page order on mount
    useEffect(() => {
        (async () => {
            try {
                const savedOrder = await loadPagesConfig();
                if (savedOrder.length > 0) {
                    // Saved config is the source of truth (adds/deletes persist);
                    // bundled pages keep their current build src.
                    const finalPages = mergePagesWithStatic(savedOrder);
                    if (finalPages.length > 0) setPages(finalPages);
                }
            } catch (e) {
                console.warn("Failed to load page order, using default.", e);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    // Reload hotspots when isAdmin changes
    useEffect(() => {
        fetchHotspots().then(s3Hotspots => {
            setAllHotspots([...initialHotspots, ...s3Hotspots]);
        });
    }, [isAdmin]);

    const page = pages[pageIndex] || pages[0];

    const handleNext = useCallback(() => {
        if (isMobile) {
            flipbookRef.current?.pageFlip()?.turnToNextPage();
        } else {
            flipbookRef.current?.pageFlip()?.flipNext();
        }
    }, [isMobile]);

    const handlePrev = useCallback(() => {
        if (isMobile) {
            flipbookRef.current?.pageFlip()?.turnToPrevPage();
        } else {
            flipbookRef.current?.pageFlip()?.flipPrev();
        }
    }, [isMobile]);

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

    // "Volver al inicio" returns to the intro/index section. Position-based (2nd
    // page) so it keeps working regardless of page ids, which change whenever the
    // catalog is re-uploaded.
    const INTRO_PAGE_COUNT = 5;
    const goToStart = () => {
        const target = Math.min(1, pages.length - 1);
        flipbookRef.current?.pageFlip()?.turnToPage(target);
    };

    // Admin State
    const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
    const [draftHotspot, setDraftHotspot] = useState<{ xPct: number; yPct: number; pageId: string; widthPct?: number; heightPct?: number } | null>(null);
    const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

    // Clear admin state when changing pages
    useEffect(() => {
        setSelectedHotspot(null);
        setDraftHotspot(null);
    }, [pageIndex, isAdmin]);

    const handleUpdateHotspots = (newHotspots: Hotspot[]) => {
        setAllHotspots(newHotspots);
        // Exclude initial hotspots from being saved to S3
        const adminHotspots = newHotspots.filter(h => !initialHotspots.find(ih => ih.id === h.id));
        saveHotspotsToS3(adminHotspots);
        if (selectedHotspot) {
            const updated = newHotspots.find(h => h.id === selectedHotspot.id);
            if (updated) setSelectedHotspot(updated);
        }
    };

    const handleHotspotClick = (hotspot: Hotspot) => {
        if (isAdmin) {
            setSelectedHotspot(hotspot);
            setDraftHotspot(null);
        } else {
            if (hotspot.type === "link" && hotspot.targetPageId) {
                // Navigate directly to the link's target page
                handlePageSelect(hotspot.targetPageId);
            } else if (hotspot.type === "video" && hotspot.videoUrl) {
                // Trigger full-screen video popup!
                setActiveVideoUrl(hotspot.videoUrl);
            } else {
                // Normal user clicked a hotspot on an index page
                const indexPages = ["001", "002", "003", "004", "005"];
                if (indexPages.includes(hotspot.pageId)) {
                    // Find another hotspot for this product that is NOT an index page.
                    // Match on productName (new-style) when present, else productId (legacy).
                    const sameProduct = (h: typeof hotspot) =>
                        hotspot.productName
                            ? h.productName === hotspot.productName
                            : h.productId === hotspot.productId;
                    const targetHotspots = allHotspots.filter(
                        h => sameProduct(h) && !indexPages.includes(h.pageId)
                    );

                    if (targetHotspots.length > 0) {
                        // Navigate to the first found detail page
                        handlePageSelect(targetHotspots[0].pageId);
                    }
                }
            }
        }
    };

    const handleStageClick = (pageId: string, xPct: number, yPct: number, widthPct?: number, heightPct?: number) => {
        if (isAdmin) {
            setSelectedHotspot(null);
            setDraftHotspot({ xPct, yPct, pageId, widthPct, heightPct });
        }
    };

    if (isLoading) return (
        <div className="h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin" />
                <span className="text-xs font-semibold text-gray-400 tracking-widest">LOADING CATALOG...</span>
            </div>
        </div>
    );

    if (pages.length === 0) return <div className="h-screen flex items-center justify-center">No pages found</div>;

    return (
        <div className="flex flex-col w-full h-screen bg-gray-50 pt-16 pb-20 overflow-hidden relative">
            {/* Main Stage */}
            <div className="flex-1 relative flex items-center justify-center px-4">
                <button
                    onClick={handlePrev}
                    disabled={pageIndex === 0}
                    className="fixed cursor-pointer top-1/2 -translate-y-1/2 left-2 sm:left-4 z-[100] p-3 rounded-full bg-white/80 hover:bg-white shadow-md disabled:opacity-30 transition-all hover:scale-110 pointer-events-auto"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>

                <div className="w-full h-full max-w-7xl max-h-[calc(100vh-160px)] flex items-center justify-center pointer-events-none">
                    <Flipbook
                        key={isAdmin ? "admin" : "user"}
                        ref={flipbookRef}
                        pages={pages}
                        hotspots={allHotspots}
                        isAdmin={isAdmin}
                        onHotspotClick={handleHotspotClick}
                        onStageClick={handleStageClick}
                        onPageChange={setPageIndex}
                        initialPage={pageIndex}
                        isMobile={isMobile}
                    />
                </div>

                {/* Return to Index button */}
                {pageIndex >= INTRO_PAGE_COUNT && (
                    <button
                        onClick={goToStart}
                        className="fixed cursor-pointer top-24 left-4 sm:left-8 z-[100] px-4 py-2 bg-white/90 backdrop-blur shadow-md hover:bg-white rounded-full text-sm font-semibold text-gray-800 transition-all hover:scale-105 pointer-events-auto flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                        Volver al inicio
                    </button>
                )}

                <button
                    onClick={handleNext}
                    disabled={isMobile ? pageIndex >= pages.length - 1 : pageIndex >= pages.length - 2}
                    className="fixed cursor-pointer top-1/2 -translate-y-1/2 right-2 sm:right-4 z-[100] p-3 rounded-full bg-white/80 hover:bg-white shadow-md disabled:opacity-30 transition-all hover:scale-110 pointer-events-auto"
                >
                    <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>

                {/* Page indicator */}
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 py-2 px-6 bg-black/80 backdrop-blur-md text-white rounded-full text-xs font-black tracking-widest shadow-2xl z-[100] pointer-events-none">
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
                    pages={pages}
                    visiblePageIds={
                        isMobile
                            ? [pages[pageIndex]?.id].filter(Boolean) as string[]
                            : (pageIndex === 0
                                ? [pages[0].id]
                                : [pages[pageIndex]?.id, pages[pageIndex + 1]?.id].filter(Boolean) as string[])
                    }
                    allHotspots={allHotspots}
                    onUpdateHotspots={handleUpdateHotspots}
                    selectedHotspot={selectedHotspot}
                    draftHotspot={draftHotspot}
                    onCloseEditor={() => setSelectedHotspot(null)}
                    onClearDraft={() => setDraftHotspot(null)}
                />
            )}

            {activeVideoUrl && (
                <VideoPopup
                    videoUrl={activeVideoUrl}
                    onClose={() => setActiveVideoUrl(null)}
                />
            )}
        </div>
    );
}
