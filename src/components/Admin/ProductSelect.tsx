import { useState, useMemo, useEffect, useRef } from "react";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";
import { getSizeField, getSizeLabel, getSizeOptions } from "../../utils/productSize";

export type ProductSelection = { name: string; size?: string };

type ProductSelectProps = {
    products: Product[];
    value?: ProductSelection | null;
    onChange: (selection: ProductSelection) => void;
    className?: string;
};

export function ProductSelect({ products, value, onChange, className }: ProductSelectProps) {
    const [searchName, setSearchName] = useState("");
    const [showNameDropdown, setShowNameDropdown] = useState(false);
    const [selectedName, setSelectedName] = useState<string | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [showSizeDropdown, setShowSizeDropdown] = useState(false);

    const nameInputRef = useRef<HTMLInputElement>(null);

    // Initialize from the incoming value (editing an existing hotspot)
    useEffect(() => {
        if (value?.name) {
            setSelectedName(value.name);
            setSearchName(value.name);
            setSelectedSize(value.size ?? null);
        }
    }, [value?.name, value?.size]);

    const uniqueNames = useMemo(() => {
        const names = Array.from(new Set(products.map((p) => p.name)));
        if (!searchName) return names;
        const lower = searchName.toLowerCase();
        return names.filter((n) => n.toLowerCase().includes(lower));
    }, [products, searchName]);

    const groupVariants = useMemo(
        () => (selectedName ? products.filter((p) => p.name === selectedName) : []),
        [products, selectedName]
    );

    const sizeField = useMemo(() => getSizeField(groupVariants), [groupVariants]);
    const sizeOptions = useMemo(() => getSizeOptions(groupVariants), [groupVariants]);
    const hasSizes = sizeOptions.length > 0;

    const colorCount = useMemo(() => {
        const relevant = hasSizes && selectedSize && sizeField
            ? groupVariants.filter((p) => p[sizeField] === selectedSize)
            : groupVariants;
        return new Set(relevant.map((p) => (p.referencia || p.color || p.id).toLowerCase().trim())).size;
    }, [groupVariants, hasSizes, selectedSize, sizeField]);

    const reset = () => {
        setSearchName("");
        setSelectedName(null);
        setSelectedSize(null);
        setShowNameDropdown(false);
        setShowSizeDropdown(false);
    };

    return (
        <div className={cn("flex flex-col gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200", className)}>
            {/* Step 1: Product name */}
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
                                setSelectedSize(null);
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
                                    reset();
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
                                    setSelectedSize(null);
                                    setShowNameDropdown(false);

                                    const variants = products.filter((p) => p.name === name);
                                    const opts = getSizeOptions(variants);
                                    if (opts.length > 0) {
                                        // Wait for a size pick; emit name-only for now
                                        onChange({ name });
                                        setShowSizeDropdown(true);
                                    } else {
                                        onChange({ name });
                                        setShowSizeDropdown(false);
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

            {/* Step 2: Size (Tamaño / Talla) — only when the group has sizes */}
            {selectedName && hasSizes && sizeField && (
                <div className="flex flex-col gap-1 relative animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">2. {getSizeLabel(sizeField)}</label>
                    <button
                        type="button"
                        onClick={() => setShowSizeDropdown(!showSizeDropdown)}
                        className="w-full px-3 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                        <span className={cn(selectedSize ? "" : "text-gray-400")}>
                            {selectedSize || `Select ${getSizeLabel(sizeField).toLowerCase()}...`}
                        </span>
                        <svg className={cn("w-4 h-4 text-gray-400 transition-transform", showSizeDropdown && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {showSizeDropdown && (
                        <div className="absolute top-full mt-1 left-0 right-0 max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl z-20 divide-y divide-gray-100">
                            {sizeOptions.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => {
                                        setSelectedSize(size);
                                        setShowSizeDropdown(false);
                                        onChange({ name: selectedName, size });
                                    }}
                                    className={cn(
                                        "w-full text-left px-3 py-2.5 text-sm transition-colors",
                                        selectedSize === size ? "bg-gray-100 text-black font-medium" : "hover:bg-gray-50 text-gray-700"
                                    )}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Summary: what the customer will choose from */}
            {selectedName && (!hasSizes || selectedSize) && (
                <p className="text-[11px] text-gray-500 px-1">
                    Customer will pick a color from <strong className="text-gray-700">{colorCount}</strong> option{colorCount === 1 ? "" : "s"}
                    {selectedSize ? <> for size <strong className="text-gray-700">{selectedSize}</strong></> : null}.
                </p>
            )}
        </div>
    );
}
