import { useEffect, useRef } from "react";
import { getEmbedUrl } from "../../utils/video";

type VideoPopupProps = {
    videoUrl: string;
    onClose: () => void;
};

export function VideoPopup({ videoUrl, onClose }: VideoPopupProps) {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const { type, embedUrl } = getEmbedUrl(videoUrl);

    useEffect(() => {
        // Prevent background scrolling
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
        
        // Open the dialog natively as a modal
        const dialogEl = dialogRef.current;
        if (dialogEl && !dialogEl.open) {
            dialogEl.showModal();
        }

        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    const handleClose = () => {
        const dialogEl = dialogRef.current;
        if (dialogEl && dialogEl.open) {
            dialogEl.close();
        }
        onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            onClick={(e) => {
                // Close dialog if user clicks the backdrop (the dialog tag itself)
                if (e.target === dialogRef.current) {
                    handleClose();
                }
            }}
            className="fixed inset-0 z-[200] w-full h-full max-w-full max-h-full bg-black/90 backdrop-blur-md flex items-center justify-center p-4 border-none outline-none overflow-hidden"
        >
            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-black/60 hover:bg-black text-white/80 hover:text-white transition-all border border-white/10 hover:scale-110 active:scale-95 shadow-md flex items-center justify-center cursor-pointer"
                    aria-label="Close video"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Video Container */}
                <div className="w-full h-full flex items-center justify-center bg-black">
                    {type === "youtube" || type === "vimeo" ? (
                        <iframe
                            src={embedUrl}
                            title="Video Player"
                            className="w-full h-full border-none"
                            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    ) : type === "direct" && embedUrl ? (
                        <video
                            src={embedUrl}
                            autoPlay
                            controls
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="text-white text-sm font-semibold p-6 text-center">
                            Invalid video URL or format.
                        </div>
                    )}
                </div>
            </div>
        </dialog>
    );
}
