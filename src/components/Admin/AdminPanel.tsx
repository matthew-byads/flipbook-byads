import { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { type Hotspot } from "../../data/hotspots";
import { pages as staticPages } from "../../data/pages";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";
import { generateId } from "../../utils/id";
import { BulkImageManager } from "./BulkImageManager";
import { BulkProductManager } from "./BulkProductManager";

import { ProductForm } from "./ProductForm";
import { ProductSelect } from "./ProductSelect";
import { VideoPopup } from "../Catalog/VideoPopup";
import { VendorManager } from "./VendorManager";
import { SettingsManager } from "./SettingsManager";

type AdminPanelProps = {
    pageId: string;
    allHotspots: Hotspot[];
    onUpdateHotspots: (hotspots: Hotspot[]) => void;
    selectedHotspot: Hotspot | null; // For editing
    onCloseEditor: () => void;
    // If we have a draft hotspot (clicked point or drawn area)
    draftHotspot?: { xPct: number; yPct: number; widthPct?: number; heightPct?: number } | null;
    onClearDraft: () => void;
    visiblePageIds: string[];
};

type AdminTab = "hotspots" | "products" | "vendors" | "pages" | "settings";

export function AdminPanel({
    pageId,
    allHotspots,
    onUpdateHotspots,
    selectedHotspot,
    onCloseEditor,
    draftHotspot,
    onClearDraft,
    visiblePageIds,
}: AdminPanelProps) {
    const { allProducts, addProduct } = useProducts();
    const [activeTab, setActiveTab] = useState<AdminTab>("hotspots");
    const [isCreatingProduct, setIsCreatingProduct] = useState(false);
    const [selectedProductForDraft, setSelectedProductForDraft] = useState<string | null>(null);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    const [hotspotType, setHotspotType] = useState<"product" | "link" | "video">("product");
    const [selectedTargetPageId, setSelectedTargetPageId] = useState<string>("");
    const [videoUrlDraft, setVideoUrlDraft] = useState<string>("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (selectedHotspot) {
            setHotspotType(selectedHotspot.type || "product");
            setSelectedTargetPageId(selectedHotspot.targetPageId || "");
            setVideoUrlDraft(selectedHotspot.videoUrl || "");
        } else {
            setHotspotType("product");
            setSelectedTargetPageId("");
            setVideoUrlDraft("");
        }
    }, [selectedHotspot]);

    const handleUpdateProduct = (productId: string) => {
        if (!selectedHotspot) return;
        const updated = allHotspots.map((h) =>
            h.id === selectedHotspot.id ? { ...h, productId, type: "product" as const, targetPageId: undefined, videoUrl: undefined } : h
        );
        onUpdateHotspots(updated);
    };

    const handleUpdateLink = (targetId: string) => {
        if (!selectedHotspot) return;
        const updated = allHotspots.map((h) =>
            h.id === selectedHotspot.id ? { ...h, type: "link" as const, targetPageId: targetId, productId: undefined, videoUrl: undefined } : h
        );
        onUpdateHotspots(updated);
    };

    const handleUpdateVideo = (videoUrl: string) => {
        if (!selectedHotspot) return;
        const updated = allHotspots.map((h) =>
            h.id === selectedHotspot.id ? { ...h, type: "video" as const, videoUrl, productId: undefined, targetPageId: undefined } : h
        );
        onUpdateHotspots(updated);
    };

    const handleDelete = () => {
        if (!selectedHotspot) return;
        const updated = allHotspots.filter((h) => h.id !== selectedHotspot.id);
        onUpdateHotspots(updated);
        onCloseEditor();
    };

    // -- Creator Logic for New Hotspot --
    const handleCreateHotspot = (productId?: string) => {
        if (!draftHotspot) return;

        let newHotspot: Hotspot;

        if (hotspotType === "product") {
            const pid = productId || selectedProductForDraft;
            if (!pid) return;
            newHotspot = {
                id: generateId("admin-"),
                pageId,
                productId: pid,
                xPct: draftHotspot.xPct,
                yPct: draftHotspot.yPct,
                widthPct: draftHotspot.widthPct,
                heightPct: draftHotspot.heightPct,
                type: "product"
            };
        } else if (hotspotType === "link") {
            if (!selectedTargetPageId) return;
            newHotspot = {
                id: generateId("admin-"),
                pageId,
                targetPageId: selectedTargetPageId,
                xPct: draftHotspot.xPct,
                yPct: draftHotspot.yPct,
                widthPct: draftHotspot.widthPct,
                heightPct: draftHotspot.heightPct,
                type: "link"
            };
        } else {
            newHotspot = {
                id: generateId("admin-"),
                pageId,
                videoUrl: videoUrlDraft,
                xPct: draftHotspot.xPct,
                yPct: draftHotspot.yPct,
                widthPct: draftHotspot.widthPct,
                heightPct: draftHotspot.heightPct,
                type: "video"
            };
        }

        onUpdateHotspots([...allHotspots, newHotspot]);
        onClearDraft();
        setSelectedProductForDraft(null);
        setSelectedTargetPageId("");
        setVideoUrlDraft("");
    };

    const handleClearPage = () => {
        if (confirm(`Delete all hotspots on ${visiblePageIds.length > 1 ? 'these pages' : 'this page'}?`)) {
            const updated = allHotspots.filter(h => !visiblePageIds.includes(h.pageId));
            onUpdateHotspots(updated);
        }
    };

    const handleClearAll = () => {
        if (confirm("Delete all hotspots across all pages? This cannot be undone.")) {
            onUpdateHotspots([]);
        }
    };

    const handleCreateProduct = (data: Partial<Product>) => {
        const newProduct: Product = {
            id: generateId("prod-"),
            name: data.name || "New Product",
            price: data.price,
            currency: data.currency,
            sku: data.sku,
            variant: data.variant,
            image: data.image,
            talla: data.talla,
            tamaño: data.tamaño,
            color: data.color,
            referencia: data.referencia,
        };
        addProduct(newProduct);
        setIsCreatingProduct(false);

        if (draftHotspot) {
            setSelectedProductForDraft(newProduct.id);
        } else if (selectedHotspot) {
            handleUpdateProduct(newProduct.id);
        }
    };

    const isEditing = !!selectedHotspot;
    const isCreating = !!draftHotspot;

    // If we are actively editing/creating a hotspot, show the focused popover
    if (isEditing || isCreating) {
        return (
            <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none p-4">
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
                <div className="bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-sm pointer-events-auto animate-in zoom-in-95 max-h-[90vh] overflow-y-auto relative z-10">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        {isCreatingProduct ? "New Product" : (isEditing ? "Edit Hotspot" : "New Hotspot")}
                    </h3>

                    {isCreatingProduct ? (
                        <ProductForm
                            onSubmit={handleCreateProduct}
                            onCancel={() => setIsCreatingProduct(false)}
                        />
                    ) : (
                        <>
                            <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
                                <button
                                    onClick={() => {
                                        setHotspotType("product");
                                        if (isEditing) handleUpdateProduct(selectedHotspot?.productId || "");
                                    }}
                                    className={cn("flex-1 text-xs font-bold py-2 rounded-lg transition-all", hotspotType === "product" ? "bg-white shadow text-black" : "text-gray-500 hover:text-gray-700")}
                                >
                                    Product
                                </button>
                                <button
                                    onClick={() => {
                                        setHotspotType("link");
                                        if (isEditing && selectedTargetPageId) handleUpdateLink(selectedTargetPageId);
                                    }}
                                    className={cn("flex-1 text-xs font-bold py-2 rounded-lg transition-all", hotspotType === "link" ? "bg-white shadow text-black" : "text-gray-500 hover:text-gray-700")}
                                >
                                    Page Link
                                </button>
                                <button
                                    onClick={() => {
                                        setHotspotType("video");
                                        if (isEditing) handleUpdateVideo(videoUrlDraft);
                                    }}
                                    className={cn("flex-1 text-xs font-bold py-2 rounded-lg transition-all", hotspotType === "video" ? "bg-white shadow text-black" : "text-gray-500 hover:text-gray-700")}
                                >
                                    Video
                                </button>
                            </div>

                            {hotspotType === "product" ? (
                                <>
                                    <ProductSelect
                                        products={allProducts}
                                        selectedProductId={isEditing ? (selectedHotspot.productId || "") : (selectedProductForDraft || "")}
                                        onSelect={(id) => {
                                            if (isEditing) handleUpdateProduct(id);
                                            else setSelectedProductForDraft(id);
                                        }}
                                        className="mb-4"
                                    />

                                    <button
                                        onClick={() => setIsCreatingProduct(true)}
                                        className="w-full mb-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                        Create New Product
                                    </button>
                                </>
                            ) : hotspotType === "link" ? (
                                <div className="mb-4 space-y-2">
                                    <label className="text-xs font-bold text-gray-700">Target Page</label>
                                    <select
                                        value={isEditing ? (selectedHotspot.targetPageId || "") : selectedTargetPageId}
                                        onChange={(e) => {
                                            const newTarget = e.target.value;
                                            setSelectedTargetPageId(newTarget);
                                            if (isEditing) handleUpdateLink(newTarget);
                                        }}
                                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-black outline-none transition-all"
                                    >
                                        <option value="" disabled>Select a page to link to...</option>
                                        {staticPages.map(p => (
                                            <option key={p.id} value={p.id}>
                                                {p.label || `Page ${p.id}`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            ) : (
                                <div className="mb-4 space-y-2">
                                    <label className="text-xs font-bold text-gray-700">Video URL</label>
                                    <input
                                        type="text"
                                        placeholder="YouTube, Vimeo or direct MP4 URL"
                                        value={videoUrlDraft}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setVideoUrlDraft(val);
                                            if (isEditing) handleUpdateVideo(val);
                                        }}
                                        className="w-full p-3 rounded-xl border border-gray-200 bg-white text-sm focus:ring-2 focus:ring-black outline-none transition-all"
                                    />
                                    {videoUrlDraft && (
                                        <button
                                            onClick={() => setPreviewUrl(videoUrlDraft)}
                                            className="w-full mt-2 py-2.5 bg-blue-50 border border-blue-100 rounded-xl text-[10px] font-bold text-blue-600 hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                            Preview Video
                                        </button>
                                    )}
                                </div>
                            )}

                            <div className="flex gap-3">
                                {isEditing ? (
                                    <button
                                        onClick={handleDelete}
                                        className="flex-1 cursor-pointer bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 font-bold text-xs transition-colors"
                                    >
                                        Delete Hotspot
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleCreateHotspot()}
                                        disabled={
                                            hotspotType === "product"
                                                ? !selectedProductForDraft
                                                : hotspotType === "link"
                                                    ? !selectedTargetPageId
                                                    : !videoUrlDraft
                                        }
                                        className="flex-1 cursor-pointer bg-black text-white py-3 rounded-xl hover:bg-gray-800 disabled:opacity-30 font-bold text-xs transition-colors"
                                    >
                                        Place Hotspot
                                    </button>
                                )}

                                <button
                                    onClick={() => {
                                        onCloseEditor();
                                        onClearDraft();
                                        setIsCreatingProduct(false);
                                        setVideoUrlDraft("");
                                        setSelectedProductForDraft(null);
                                        setSelectedTargetPageId("");
                                    }}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 font-bold text-xs transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>
                {previewUrl && (
                    <div className="pointer-events-auto">
                        <VideoPopup
                            videoUrl={previewUrl}
                            onClose={() => setPreviewUrl(null)}
                        />
                    </div>
                )}
            </div>
        );
    }

    // Default: Show either floating dashboard or collapsed toolbar
    return (
        <div className="fixed bottom-24 sm:bottom-28 right-4 sm:right-6 z-[100] flex flex-col items-end gap-3 pointer-events-auto">
            {isDashboardOpen ? (
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-100 w-[calc(100vw-2rem)] sm:w-[450px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <h3 className="font-bold text-gray-900 text-sm italic tracking-tight uppercase">Admin Dashboard</h3>
                        </div>
                        <button
                            onClick={() => setIsDashboardOpen(false)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors text-gray-400"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-gray-100">
                        {[
                            { id: "hotspots", label: "Hotspots", icon: "📍" },
                            { id: "products", label: "Products", icon: "📦" },
                            { id: "vendors", label: "Vendors", icon: "🏢" },
                            { id: "pages", label: "Pages", icon: "📄" },
                            { id: "settings", label: "Settings", icon: "⚙️" }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as AdminTab)}
                                className={cn(
                                    "flex-1 cursor-pointer py-3 text-[10px] font-bold uppercase tracking-widest transition-all relative overflow-hidden",
                                    activeTab === tab.id ? "text-black" : "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                                )}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <span>{tab.icon}</span>
                                    <span>{tab.label}</span>
                                </div>
                                {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black animate-in slide-in-from-left duration-300" />}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="p-4 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto bg-white">
                        {activeTab === "hotspots" && (
                            <div className="space-y-4 animate-in fade-in duration-300">
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleClearPage}
                                        className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 font-bold text-xs transition-all active:scale-95 cursor-pointer"
                                    >
                                        Clear Page
                                    </button>
                                    <button
                                        onClick={handleClearAll}
                                        className="flex-1 bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 font-bold text-xs transition-all active:scale-[0.98] cursor-pointer"
                                    >
                                        Clear All
                                    </button>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                                    <p className="text-[10px] text-gray-500 leading-relaxed font-medium">
                                        💡 <strong className="text-gray-900">PRO TIP:</strong> Close this dashboard and <strong className="text-gray-900">Click anywhere</strong> on the flipbook to place a hotspot exactly where you want it.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === "products" && <BulkProductManager />}
                        {activeTab === "vendors" && <VendorManager />}
                        {activeTab === "pages" && <BulkImageManager />}
                        {activeTab === "settings" && <SettingsManager />}
                    </div>

                    {/* Footer */}
                    <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
                        <span className="text-[9px] text-gray-400 font-mono tracking-tighter">FLIPBOOK BYADS v1.0 • ADMIN PANEL</span>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => setIsDashboardOpen(true)}
                        className="bg-black cursor-pointer text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group relative border-4 border-white"
                        title="Open Admin Dashboard"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
                    </button>

                    <div className="bg-black/80 backdrop-blur text-white text-[10px] px-3 py-1 rounded-full shadow-lg font-bold tracking-tight">
                        DASHBOARD
                    </div>
                </div>
            )}
        </div>
    );
}
