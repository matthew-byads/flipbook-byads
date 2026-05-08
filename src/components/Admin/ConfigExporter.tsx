import { useProducts } from "../../context/ProductContext";
import { loadAdminHotspots, loadPagesConfig, saveAdminHotspots, savePagesConfig, saveCustomProducts } from "../Admin/hotspotIO";
import { hotspots as staticHotspots } from "../../data/hotspots";
import { pages as staticPages } from "../../data/pages";

export function ConfigExporter() {
    const { allProducts } = useProducts();

    const handleExport = () => {
        const customPages = loadPagesConfig();
        const customHotspots = loadAdminHotspots();

        const config = {
            version: "1.1",
            timestamp: new Date().toISOString(),
            pages: customPages.length > 0 ? customPages : staticPages,
            hotspots: customHotspots.length > 0 ? customHotspots : staticHotspots,
            products: allProducts,
        };

        const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `flipbook-config-full-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleExportHotspotsOnly = () => {
        const customHotspots = loadAdminHotspots();
        const hotspotsToExport = customHotspots.length > 0 ? customHotspots : staticHotspots;
        
        const blob = new Blob([JSON.stringify(hotspotsToExport, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `hotspots-export.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const config = JSON.parse(event.target?.result as string);
                
                // If it's a full config object
                if (config.version && config.hotspots) {
                    if (config.pages) savePagesConfig(config.pages);
                    
                    // Filter out static hotspots if they are in the import to avoid duplication
                    const staticIds = new Set(staticHotspots.map(h => h.id));
                    const customOnly = config.hotspots.filter((h: any) => !staticIds.has(h.id));
                    saveAdminHotspots(customOnly);
                    
                    if (config.products) {
                        const customProds = config.products.filter((p: any) => 
                            p.id.startsWith('bulk-') || p.id.startsWith('prod-') || p.id.startsWith('admin-')
                        );
                        saveCustomProducts(customProds);
                    }
                } 
                // If it's just a hotspots array
                else if (Array.isArray(config)) {
                    const staticIds = new Set(staticHotspots.map(h => h.id));
                    const customOnly = config.filter((h: any) => h.id && !staticIds.has(h.id));
                    saveAdminHotspots(customOnly);
                }

                alert("Import successful! Reloading to apply changes...");
                window.location.reload();
            } catch (err) {
                alert("Failed to import: " + (err instanceof Error ? err.message : "Invalid JSON"));
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">Export Configuration</h3>
            <p className="text-xs text-gray-500 mb-4">
                Since this application is statically hosted, changes made in the admin panel are stored locally in your browser.
                Use this button to download the data and share it or upload it to your hosting provider.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                    <button
                        onClick={handleExport}
                        className="w-full py-3 bg-black text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                        Download Full Config
                    </button>

                    <button
                        onClick={handleExportHotspotsOnly}
                        className="w-full py-3 bg-gray-50 border border-gray-200 text-gray-700 rounded-xl text-xs font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                        Export Hotspots Only
                    </button>
                </div>

                <div className="relative">
                    <input
                        type="file"
                        accept=".json"
                        onChange={handleImport}
                        className="hidden"
                        id="config-import"
                    />
                    <label
                        htmlFor="config-import"
                        className="flex flex-col items-center justify-center w-full h-full min-h-[100px] border-2 border-dashed border-gray-200 rounded-xl cursor-pointer hover:border-black hover:bg-black/[0.02] transition-all p-4"
                    >
                        <svg className="w-6 h-6 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
                        <span className="text-sm font-medium text-gray-700 text-center">Import Config / Hotspots</span>
                        <span className="text-[10px] text-gray-400 mt-1">Upload .json file</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
