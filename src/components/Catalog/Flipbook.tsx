import { useRef, useCallback, forwardRef, useImperativeHandle } from "react";
import HTMLFlipBook from "react-pageflip";
import { type Page } from "../../data/pages";
import { type Hotspot } from "../../data/hotspots";
import { PageStage } from "./PageStage";

type FlipbookProps = {
    pages: Page[];
    hotspots: Hotspot[];
    isAdmin: boolean;
    onHotspotClick: (hotspot: Hotspot) => void;
    onStageClick: (pageId: string, xPct: number, yPct: number) => void;
    onPageChange: (index: number) => void;
    initialPage?: number;
};

export const Flipbook = forwardRef<any, FlipbookProps>(({
    pages,
    hotspots,
    isAdmin,
    onHotspotClick,
    onStageClick,
    onPageChange,
    initialPage = 0
}, ref) => {
    const flipBookRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
        pageFlip: () => flipBookRef.current?.pageFlip()
    }));

    const onFlip = useCallback((e: any) => {
        onPageChange(e.data);
    }, [onPageChange]);

    return (
        <div className="flex items-center justify-center w-full h-full">
            <HTMLFlipBook
                width={500}
                height={700}
                size="stretch"
                minWidth={315}
                maxWidth={1000}
                minHeight={400}
                maxHeight={1533}
                maxShadowOpacity={0.5}
                showCover={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
                className="flip-book-container shadow-2xl"
                ref={flipBookRef}
                style={{}}
                startPage={initialPage}
                drawShadow={true}
                flippingTime={1000}
                usePortrait={false} // Switch to double spread
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                disableFlipByClick={false}
            >
                {pages.map((page) => (
                    <PageStage
                        key={page.id}
                        page={page}
                        hotspots={hotspots.filter(h => h.pageId === page.id)}
                        isAdmin={isAdmin}
                        onHotspotClick={onHotspotClick}
                        onStageClick={(x, y) => onStageClick(page.id, x, y)}
                    />
                ))}
            </HTMLFlipBook>
        </div>
    );
});

Flipbook.displayName = "Flipbook";
