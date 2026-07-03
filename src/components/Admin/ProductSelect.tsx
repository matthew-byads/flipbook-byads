import { useState, useMemo, useEffect, useRef } from "react";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";

type ProductSelectProps = {
    products: Product[];
    selectedProductId?: string;
    onSelect: (productId: string) => void;
    className?: string;
};

export function ProductSelect({ products, selectedProductId, onSelect, className }: ProductSelectProps) {
    const [searchName, setSearchName] = useState("");
    const [showNameDropdown, setShowNameDropdown] = useState(false);
    const [selectedName, setSelectedName] = useState<string | null>(null);

    const [showVariantDropdown, setShowVariantDropdown] = useState(false);

    const nameInputRef = useRef<HTMLInputElement>(null);

    // Initialize from selectedProductId
    useEffect(() => {
        if (selectedProductId) {
            const prod = products.find((p) => p.id === selectedProductId);
            if (prod) {
                setSelectedName(prod.name);
                setSearchName(prod.name);
            }
        }
    }, [selectedProductId, products]);

    const uniqueNames = useMemo(() => {
        const names = Array.from(new Set(products.map((p) => p.name)));
        if (!searchName) return names;
        const lower = searchName.toLowerCase();
        return names.filter((n) => n.toLowerCase().includes(lower));
    }, [products, searchName]);

    const variants = useMemo(() => {
        if (!selectedName) return [];
        const allVariants = products.filter((p) => p.name === selectedName);
        
        // Deduplicate by color or referencia to avoid showing duplicates for different sizes
        const unique = new Map<string, Product>();
        for (const v of allVariants) {
            const key = (v.referencia || v.color || v.id).toLowerCase().trim();
            if (!unique.has(key)) {
                unique.set(key, v);
            }
        }
        return Array.from(unique.values());
    }, [products, selectedName]);

    // Handle clicks outside could be added, but for now we rely on explicit selection
    return (
        <div className={cn("flex flex-col gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200", className)}>
            {/* Step 1: Select Product Name */}
            <div className="flex flex-col gap-1 relative">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">1. Product Group</label>
                <div className="relative">
                    <input
                        ref={nameInputRef}
                        type="text"
                        placeholder="Search products..."
                        value={searchName}
                        onChange={(e) => {
                            setSearchName(e.target.value);
                            setShowNameDropdown(true);
                            if (selectedName && e.target.value !== selectedName) {
                                setSelectedName(null);
                            }
                        }}
                        onClick={() => setShowNameDropdown(true)}
                        className="w-full px-3 py-2.5 pr-12 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/10 transition-shadow"
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                        {searchName && (
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSearchName("");
                                    setSelectedName(null);
                                    onSelect("");
                                    setShowNameDropdown(false);
                                    setShowVariantDropdown(false);
                                }}
                                className="p-1 text-gray-400 hover:text-gray-600 rounded"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                        <svg className={cn("w-4 h-4 text-gray-400 transition-transform pointer-events-none", showNameDropdown && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
                
                {showNameDropdown && (
                    <div className="absolute top-full mt-1 left-0 right-0 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl z-20">
                        {uniqueNames.map((name) => (
                            <button
                                key={name}
                                onClick={() => {
                                    setSelectedName(name);
                                    setSearchName(name);
                                    setShowNameDropdown(false);
                                    setShowVariantDropdown(true);
                                    
                                    // If there's only one variant, auto-select it
                                    const prodVariants = products.filter(p => p.name === name);
                                    if (prodVariants.length === 1) {
                                        onSelect(prodVariants[0].id);
                                        setShowVariantDropdown(false);
                                    }
                                }}
                                className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 transition-colors"
                            >
                                {name}
                            </button>
                        ))}
                        {uniqueNames.length === 0 && (
                            <div className="px-3 py-2 text-sm text-gray-400">No products found</div>
                        )}
                    </div>
                )}
            </div>

            {/* Step 2: Select Variant (Color/Ref) */}
            {selectedName && variants.length > 0 && (
                <div className="flex flex-col gap-1 relative animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">2. Color / Variant</label>
                    <button
                        type="button"
                        onClick={() => setShowVariantDropdown(!showVariantDropdown)}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                        <span>
                            {selectedProductId && variants.find(v => v.id === selectedProductId)
                                ? (() => {
                                    const selected = variants.find(v => v.id === selectedProductId)!;
                                    return selected.referencia || selected.color || "Default";
                                })()
                                : "Select color/variant..."}
                        </span>
                        <div className="flex items-center gap-1">
                            {selectedProductId && (
                                <button
                                    type="button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onSelect("");
                                    }}
                                    className="p-1 text-gray-400 hover:text-gray-600 rounded"
                                >
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                            <svg className={cn("w-4 h-4 text-gray-400 transition-transform", showVariantDropdown && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>

                    {showVariantDropdown && (
                        <div className="absolute top-full mt-1 left-0 right-0 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl z-20 divide-y divide-gray-100">
                            {variants.map((v) => {
                                const isSelected = selectedProductId === v.id;
                                return (
                                    <button
                                        key={v.id}
                                        onClick={() => {
                                            onSelect(v.id);
                                            setShowVariantDropdown(false);
                                        }}
                                        className={cn(
                                            "w-full text-left px-3 py-2.5 text-sm transition-colors flex flex-col gap-0.5",
                                            isSelected
                                                ? "bg-gray-100"
                                                : "hover:bg-gray-50 text-gray-700"
                                        )}
                                    >
                                        <div className="flex justify-between items-center w-full">
                                            <span className={cn("font-medium", isSelected ? "text-black" : "")}>
                                                {v.referencia || v.color || "Default"}
                                            </span>
                                            {v.price && (
                                                <span className={cn("text-[10px]", isSelected ? "text-gray-600" : "text-gray-500")}>
                                                    {v.currency} {v.price.toLocaleString()}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex gap-2 text-[10px]">
                                            {v.color && v.referencia && (
                                                <span className={cn(isSelected ? "text-gray-600" : "text-gray-500")}>
                                                    Category: {v.color}
                                                </span>
                                            )}
                                            {v.talla && (
                                                <span className={cn(isSelected ? "text-gray-600" : "text-gray-500")}>
                                                    Talla: {v.talla}
                                                </span>
                                            )}
                                            {v.tamaño && (
                                                <span className={cn(isSelected ? "text-gray-600" : "text-gray-500")}>
                                                    Tamaño: {v.tamaño}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
