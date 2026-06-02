/**
 * Parses common video hosting URLs (YouTube, Vimeo) and returns the corresponding embed URL
 * or indicates it's a direct/unknown video format.
 */
export function getEmbedUrl(url: string): { type: "youtube" | "vimeo" | "direct" | "unknown"; embedUrl: string } {
    if (!url) return { type: "unknown", embedUrl: "" };
    
    const trimmed = url.trim();

    // YouTube regexes
    const ytReg = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
    const ytMatch = trimmed.match(ytReg);
    if (ytMatch && ytMatch[1]) {
        return {
            type: "youtube",
            embedUrl: `https://www.youtube.com/embed/${ytMatch[1]}?autoplay=1&rel=0`
        };
    }
    
    // Vimeo regexes
    const vimeoReg = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/i;
    const vimeoMatch = trimmed.match(vimeoReg);
    if (vimeoMatch && vimeoMatch[3]) {
        return {
            type: "vimeo",
            embedUrl: `https://player.vimeo.com/video/${vimeoMatch[3]}?autoplay=1`
        };
    }
    
    // Direct video file formats
    const isDirectVideo = /\.(mp4|webm|ogg|mov|m4v)(?:\?|$)/i.test(trimmed);
    if (isDirectVideo) {
        return { type: "direct", embedUrl: trimmed };
    }
    
    // Fallback to direct URL (allows browsers to try to load it or native video tag)
    return { type: "direct", embedUrl: trimmed };
}
