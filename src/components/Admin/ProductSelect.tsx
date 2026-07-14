import { useState, useMemo, useEffect, useLayoutEffect, useRef, type RefObject, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { type Product } from "../../data/products";
import { cn } from "../../utils/cn";
import { getSizeField, getSizeLabel, getSizeOptions } from "../../utils/productSize";

export type ProductSelection = { name: string; size?: string };

/**
 * A dropdown list rendered in a portal with fixed positioning so it escapes the
 * hotspot popup's `overflow-y-auto` clipping. It anchors to `anchorRef`, tracks
 * scroll/resize, and flips above the anchor when there isn't room below.
 */
function FloatingDropdown({
    anchorRef,
    open,
    listRef,
    className,
    children,
}: {
    anchorRef: RefObject<HTMLElement | null>;
    open: boolean;
    listRef: RefObject<HTMLDivElement | null>;
    className?: string;
    children: ReactNode;
}) {
    const [pos, setPos] = useState<{ top: number; left: number; width: number; maxHeight: number } | null>(null);

    useLayoutEffect(() => {
        if (!open) return;
        const anchor = anchorRef.current;
        if (!anchor) return;
        const update = () => {
            const rect = anchor.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;
            const openUp = spaceBelow < 200 && spaceAbove > spaceBelow;
            const maxHeight = Math.max(120, Math.min(240, (openUp ? spaceAbove : spaceBelow) - 12));
            const top = openUp ? rect.top - maxHeight - 4 : rect.bottom + 4;
            setPos({ top, left: rect.left, width: rect.width, maxHeight });
        };
        update();
        window.addEventListener("scroll", update, true);
        window.addEventListener("resize", update);
        return () => {
            window.removeEventListener("scroll", update, true);
            window.removeEventListener("resize", update);
        };
    }, [open, anchorRef]);

    if (!open || !pos) return null;

    return createPortal(
        <div
            ref={listRef}
            style={{ position: "fixed", top: pos.top, left: pos.left, width: pos.width, maxHeight: pos.maxHeight, zIndex: 100 }}
            className={cn("overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-xl", className)}
        >
            {children}
        </div>,
        document.body
    );
}

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
    const containerRef = useRef<HTMLDivElement>(null);
    const nameFieldRef = useRef<HTMLDivElement>(null);
    const nameListRef = useRef<HTMLDivElement>(null);
    const sizeButtonRef = useRef<HTMLButtonElement>(null);
    const sizeListRef = useRef<HTMLDivElement>(null);

    // Collapse any open dropdown when clicking outside the picker. The dropdown
    // lists are portalled to <body>, so they're checked separately from the
    // container.
    useEffect(() => {
        if (!showNameDropdown && !showSizeDropdown) return;
        const handlePointerDown = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                containerRef.current?.contains(target) ||
                nameListRef.current?.contains(target) ||
                sizeListRef.current?.contains(target)
            ) {
                return;
            }
            setShowNameDropdown(false);
            setShowSizeDropdown(false);
        };
        document.addEventListener("mousedown", handlePointerDown);
        return () => document.removeEventListener("mousedown", handlePointerDown);
    }, [showNameDropdown, showSizeDropdown]);

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
        <div ref={containerRef} className={cn("flex flex-col gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200", className)}>
            {/* Step 1: Product name */}
            <div className="flex flex-col gap-1 relative">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">1. Product Group</label>
                <div ref={nameFieldRef} className="relative">
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
                        <button
                            type="button"
                            aria-label={showNameDropdown ? "Collapse" : "Expand"}
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowNameDropdown((v) => !v);
                            }}
                            className="p-0.5 text-gray-400 hover:text-gray-600 rounded"
                        >
                            <svg className={cn("w-4 h-4 transition-transform", showNameDropdown && "rotate-180")} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>

                <FloatingDropdown anchorRef={nameFieldRef} open={showNameDropdown} listRef={nameListRef}>
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
                </FloatingDropdown>
            </div>

            {/* Step 2: Size (Tamaño / Talla) — only when the group has sizes */}
            {selectedName && hasSizes && sizeField && (
                <div className="flex flex-col gap-1 relative animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">2. {getSizeLabel(sizeField)}</label>
                    <button
                        ref={sizeButtonRef}
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

                    <FloatingDropdown anchorRef={sizeButtonRef} open={showSizeDropdown} listRef={sizeListRef} className="divide-y divide-gray-100">
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
                    </FloatingDropdown>
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
