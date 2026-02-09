import { useState, useRef, useEffect } from "react";
import { type Page } from "../../data/pages";
import { loadPagesConfig, savePagesConfig } from "../Admin/hotspotIO";
import { pages as staticPages } from "../../data/pages";

export function BulkImageManager() {
    const [pages, setPages] = useState<Page[]>([]);
    const [isDirty, setIsDirty] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Initial load
    useEffect(() => {
        const custom = loadPagesConfig();
        if (custom.length > 0) {
            setPages(custom);
        } else {
            setPages(staticPages);
        }
    }, []);

    const handleSave = () => {
        savePagesConfig(pages);
        setIsDirty(false);
        alert("Page configuration saved locally!");
        // We'll need to trigger a global refresh or page reload to see changes in CatalogViewer
        window.location.reload();
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newPages: Page[] = Array.from(files).map((file, index) => {
            const url = URL.createObjectURL(file);
            return {
                id: `new-${Date.now()}-${index}`,
                src: url,
                label: file.name.split('.')[0]
            };
        });

        setPages(prev => [...prev, ...newPages]);
        setIsDirty(true);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const movePage = (index: number, direction: 'up' | 'down') => {
        const newPages = [...pages];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex >= pages.length) return;

        [newPages[index], newPages[targetIndex]] = [newPages[targetIndex], newPages[index]];
        setPages(newPages);
        setIsDirty(true);
    };

    const deletePage = (id: string) => {
        if (!window.confirm("Remove this page?")) return;
        setPages(prev => prev.filter(p => p.id !== id));
        setIsDirty(true);
    };

    const updateLabel = (id: string, label: string) => {
        setPages(prev => prev.map(p => p.id === id ? { ...p, label } : p));
        setIsDirty(true);
    };

    return (
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="font-bold text-gray-900">Manage Flipbook Pages</h3>
                    <p className="text-[10px] text-gray-500">Order from top to bottom (Cover = first)</p>
                </div>
                <div className="flex gap-2">
                    <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="bulk-image-upload"
                    />
                    <label
                        htmlFor="bulk-image-upload"
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-200 cursor-pointer transition-colors"
                    >
                        Add Pages
                    </label>
                    <button
                        onClick={handleSave}
                        disabled={!isDirty}
                        className="px-4 py-1.5 bg-black text-white rounded-lg text-xs font-bold hover:bg-gray-800 disabled:opacity-50 transition-colors"
                    >
                        Save Order
                    </button>
                </div>
            </div>

            <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
                {pages.map((page, index) => (
                    <div key={page.id} className="flex items-center gap-4 p-2 bg-gray-50 rounded-xl border border-gray-100 group">
                        <div className="text-xs font-bold text-gray-400 w-4">
                            {index + 1}
                        </div>

                        <div className="w-16 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                            <img src={page.src} className="w-full h-full object-cover" alt={page.label} />
                        </div>

                        <div className="flex-1 min-w-0">
                            <input
                                type="text"
                                value={page.label || ""}
                                onChange={(e) => updateLabel(page.id, e.target.value)}
                                className="w-full bg-transparent border-none p-0 text-sm font-bold text-gray-900 focus:ring-0 placeholder:text-gray-300"
                                placeholder="Add label (e.g. Intro)"
                            />
                            <div className="text-[10px] text-gray-400 truncate mt-1">
                                {page.src.startsWith('blob:') ? 'Temporary Session Image' : page.src.split('/').pop()}
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                                onClick={() => movePage(index, 'up')}
                                disabled={index === 0}
                                className="p-1 hover:bg-white rounded shadow-sm disabled:opacity-30"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 15l7-7 7 7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                            <button
                                onClick={() => movePage(index, 'down')}
                                disabled={index === pages.length - 1}
                                className="p-1 hover:bg-white rounded shadow-sm disabled:opacity-30"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </button>
                        </div>

                        <button
                            onClick={() => deletePage(page.id)}
                            className="p-2 text-gray-300 hover:text-red-500 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                    </div>
                ))}

                {pages.length === 0 && (
                    <div className="text-center py-12 text-gray-400">
                        <p className="text-sm">No pages yet.</p>
                        <p className="text-[10px] mt-1">Add some images to start your flipbook.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
