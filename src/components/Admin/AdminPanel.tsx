import { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { type Hotspot } from "../../data/hotspots";
import { pages as staticPages } from "../../data/pages";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";
import { generateId } from "../../utils/id";
import { BulkImageManager } from "./BulkImageManager";
import { BulkProductManager } from "./BulkProductManager";
import { saveAdminHotspots } from "./hotspotIO";
import { ProductForm } from "./ProductForm";
import { ProductSelect } from "./ProductSelect";

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

type AdminTab = "hotspots" | "products" | "pages" | "settings";

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

    const [hotspotType, setHotspotType] = useState<"product" | "link">("product");
    const [selectedTargetPageId, setSelectedTargetPageId] = useState<string>("");
    const [isPublishing, setIsPublishing] = useState(false);
    const [publishStatus, setPublishStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

    useEffect(() => {
        if (selectedHotspot) {
            setHotspotType(selectedHotspot.type || "product");
            setSelectedTargetPageId(selectedHotspot.targetPageId || "");
        } else {
            setHotspotType("product");
            setSelectedTargetPageId("");
        }
    }, [selectedHotspot]);

    // -- Editor Logic for Existing Hotspot --
    const handleUpdateProduct = (productId: string) => {
        if (!selectedHotspot) return;
        const updated = allHotspots.map((h) =>
            h.id === selectedHotspot.id ? { ...h, productId, type: "product" as const, targetPageId: undefined } : h
        );
        onUpdateHotspots(updated);
        saveAdminHotspots(updated);
    };

    const handleUpdateLink = (targetId: string) => {
        if (!selectedHotspot) return;
        const updated = allHotspots.map((h) =>
            h.id === selectedHotspot.id ? { ...h, type: "link" as const, targetPageId: targetId, productId: undefined } : h
        );
        onUpdateHotspots(updated);
        saveAdminHotspots(updated);
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
        } else {
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
        }

        onUpdateHotspots([...allHotspots, newHotspot]);
        onClearDraft();
        setSelectedProductForDraft(null);
        setSelectedTargetPageId("");
    };

    const handleClearPage = () => {
        if (confirm(`Delete all hotspots on ${visiblePageIds.length > 1 ? 'these pages' : 'this page'}?`)) {
            const updated = allHotspots.filter(h => !visiblePageIds.includes(h.pageId));
            onUpdateHotspots(updated);
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
        };
        addProduct(newProduct);
        setIsCreatingProduct(false);

        if (draftHotspot) {
            setSelectedProductForDraft(newProduct.id);
        } else if (selectedHotspot) {
            handleUpdateProduct(newProduct.id);
        }
    };

    const handlePublish = async () => {
        if (!confirm("Would you like to save your changes and update the live website?")) return;

        setIsPublishing(true);
        setPublishStatus(null);
        try {
            const response = await fetch("/api/publish", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    hotspots: allHotspots,
                    products: allProducts,
                }),
            });

            const result = await response.json() as any;
            if (response.ok) {
                setPublishStatus({ type: 'success', message: "Successfully published to GitHub! Deploying now..." });
            } else {
                setPublishStatus({ type: 'error', message: result.error || "Failed to publish" });
            }
        } catch (err: any) {
            setPublishStatus({ type: 'error', message: "Connection error: " + err.message });
        } finally {
            setIsPublishing(false);
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
                            ) : (
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
                            )}

                            <div className="flex gap-3">
                                {isEditing ? (
                                    <button
                                        onClick={handleDelete}
                                        className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 font-bold text-xs transition-colors"
                                    >
                                        Delete Hotspot
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleCreateHotspot()}
                                        disabled={hotspotType === "product" ? !selectedProductForDraft : !selectedTargetPageId}
                                        className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 disabled:opacity-30 font-bold text-xs transition-colors"
                                    >
                                        Place Hotspot
                                    </button>
                                )}

                                <button
                                    onClick={() => {
                                        onCloseEditor();
                                        onClearDraft();
                                        setIsCreatingProduct(false);
                                    }}
                                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 font-bold text-xs transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    )}
                </div>
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
                            { id: "pages", label: "Pages", icon: "📄" },
                            { id: "settings", label: "Save & Go Live", icon: "🚀" }
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
                                        className="flex-1 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 font-bold text-xs transition-all active:scale-95"
                                    >
                                        Clear Page
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
                        {activeTab === "pages" && <BulkImageManager />}
                        {activeTab === "settings" && (
                            <div className="space-y-6 animate-in fade-in duration-300">
                                <div className="p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl border border-blue-100 shadow-sm">
                                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span>✨</span> Ready to update?
                                    </h3>
                                    <p className="text-[10px] text-blue-700/80 mb-6 leading-relaxed font-medium">
                                        Your changes are currently saved only in your browser.
                                        Click below to sync everything and update the live catalog for everyone to see.
                                    </p>

                                    <button
                                        onClick={handlePublish}
                                        disabled={isPublishing}
                                        className={cn(
                                            "w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-xl",
                                            isPublishing
                                                ? "bg-blue-200 text-blue-400 cursor-not-allowed"
                                                : "bg-blue-600 cursor-pointer text-white hover:bg-blue-700 active:scale-[0.98] shadow-blue-200"
                                        )}
                                    >
                                        {isPublishing ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                Updating Site...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                                Sync and Publish
                                            </>
                                        )}
                                    </button>

                                    {publishStatus && (
                                        <div className={cn(
                                            "mt-5 p-4 rounded-2xl text-[10px] font-bold flex items-center gap-3 animate-in slide-in-from-top-2",
                                            publishStatus.type === 'success' ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                        )}>
                                            <span className="text-sm">{publishStatus.type === 'success' ? "🎉" : "⚠️"}</span>
                                            {publishStatus.type === 'success'
                                                ? "Website updated successfully! It may take a minute to reflect the changes."
                                                : publishStatus.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
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
