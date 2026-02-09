import { useState } from "react";
import { type Hotspot } from "../../data/hotspots";
import { ProductSelect } from "./ProductSelect";
import { generateId } from "../../utils/id";
import { saveAdminHotspots } from "./hotspotIO";
import { useProducts } from "../../context/ProductContext";
import { ProductForm } from "./ProductForm";
import { type Product } from "../../data/products";
import { BulkProductManager } from "./BulkProductManager";
import { BulkImageManager } from "./BulkImageManager";
import { ConfigExporter } from "./ConfigExporter";
import { cn } from "../../utils/cn";

type AdminPanelProps = {
    pageId: string;
    allHotspots: Hotspot[];
    onUpdateHotspots: (hotspots: Hotspot[]) => void;
    selectedHotspot: Hotspot | null; // For editing
    onCloseEditor: () => void;
    // If we have a draft hotspot (clicked point)
    draftHotspot?: { xPct: number; yPct: number } | null;
    onClearDraft: () => void;
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
}: AdminPanelProps) {
    const { allProducts, addProduct } = useProducts();
    const [activeTab, setActiveTab] = useState<AdminTab>("hotspots");
    const [isCreatingProduct, setIsCreatingProduct] = useState(false);
    const [selectedProductForDraft, setSelectedProductForDraft] = useState<string | null>(null);
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);

    // -- Editor Logic for Existing Hotspot --
    const handleUpdateProduct = (productId: string) => {
        if (!selectedHotspot) return;
        const updated = allHotspots.map((h) =>
            h.id === selectedHotspot.id ? { ...h, productId } : h
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
        const pid = productId || selectedProductForDraft;
        if (!draftHotspot || !pid) return;

        const newHotspot: Hotspot = {
            id: generateId("admin-"),
            pageId,
            productId: pid,
            xPct: draftHotspot.xPct,
            yPct: draftHotspot.yPct,
        };

        onUpdateHotspots([...allHotspots, newHotspot]);
        onClearDraft();
        setSelectedProductForDraft(null);
    };

    const handleCreateRandom = () => {
        if (allProducts.length === 0) return;
        const randomProduct = allProducts[Math.floor(Math.random() * allProducts.length)];

        const newHotspot: Hotspot = {
            id: generateId("admin-"),
            pageId,
            productId: randomProduct.id,
            xPct: 10 + Math.random() * 80,
            yPct: 10 + Math.random() * 80,
        };
        onUpdateHotspots([...allHotspots, newHotspot]);
    };

    const handleClearPage = () => {
        if (confirm("Delete all hotspots on this page?")) {
            const updated = allHotspots.filter(h => h.pageId !== pageId);
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
                            <ProductSelect
                                products={allProducts}
                                selectedProductId={isEditing ? selectedHotspot.productId : selectedProductForDraft || ""}
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
                                        disabled={!selectedProductForDraft}
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
                            { id: "settings", label: "Export", icon: "⚙️" }
                        ].map(tab => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as AdminTab)}
                                className={cn(
                                    "flex-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-all relative overflow-hidden",
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
                                        onClick={handleCreateRandom}
                                        className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 font-bold text-xs transition-all active:scale-95"
                                    >
                                        Add Random Hotspot
                                    </button>
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
                        {activeTab === "settings" && <ConfigExporter />}
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
                        className="bg-black text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group relative border-4 border-white"
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
