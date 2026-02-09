import page001 from "../assets/pages/001.png";
import page002 from "../assets/pages/002.png";
import page003 from "../assets/pages/003.png";
import page004 from "../assets/pages/004.png";
import page005 from "../assets/pages/005.png";

export type Page = {
    id: string;
    src: string;
    label?: string;
};

// Placeholder images for initial setup
export const pages: Page[] = [
    { id: "001", src: page001, label: "Cover" },
    { id: "002", src: page002 },
    { id: "003", src: page003 },
    { id: "004", src: page004 },
    { id: "005", src: page005, label: "Back Cover" },
];
