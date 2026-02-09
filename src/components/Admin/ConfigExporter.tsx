import { useProducts } from "../../context/ProductContext";
import { loadAdminHotspots, loadPagesConfig } from "../Admin/hotspotIO";
import { hotspots as staticHotspots } from "../../data/hotspots";
import { pages as staticPages } from "../../data/pages";

export function ConfigExporter() {
    const { allProducts } = useProducts();

    const handleExport = () => {
        const customPages = loadPagesConfig();
        const customHotspots = loadAdminHotspots();

        const config = {
            version: "1.0",
            timestamp: new Date().toISOString(),
            pages: customPages.length > 0 ? customPages : staticPages,
            hotspots: customHotspots.length > 0 ? customHotspots : staticHotspots,
            products: allProducts,
        };

        const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `flipbook-config-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Export Configuration</h3>
            <p className="text-xs text-gray-500 mb-4">
                Since this application is statically hosted, changes made in the admin panel are stored locally in your browser.
                Use this button to download the data and share it or upload it to your hosting provider.
            </p>
            <button
                onClick={handleExport}
                className="w-full py-3 bg-green-600 text-white rounded-xl text-sm font-bold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Download config.json
            </button>
        </div>
    );
}
