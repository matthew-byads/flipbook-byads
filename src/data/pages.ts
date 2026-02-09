export type Page = {
    id: string;
    src: string;
    label?: string;
};

// Placeholder images for initial setup
export const pages: Page[] = [
    { id: "001", src: new URL("../assets/pages/001.png", import.meta.url).toString(), label: "Cover" },
    { id: "002", src: new URL("../assets/pages/002.png", import.meta.url).toString() },
    { id: "003", src: new URL("../assets/pages/003.png", import.meta.url).toString() },
    { id: "004", src: new URL("../assets/pages/004.png", import.meta.url).toString() },
    { id: "005", src: new URL("../assets/pages/005.png", import.meta.url).toString(), label: "Back Cover" },
];
