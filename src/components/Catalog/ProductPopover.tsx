import { useState, useMemo, useEffect } from "react";
import { type Product } from "../../data/products";
import { useCart } from "../../cart/CartContext";
import { getSizeField, getSizeLabel } from "../../utils/productSize";
import { cn } from "../../utils/cn";

type ProductPopoverProps = {
    variants: Product[];
    name: string;
    referencia?: string;
    onClose: () => void;
    pageId: string;
    style?: React.CSSProperties;
};

export function ProductPopover({ variants, name, referencia, onClose, pageId, style }: ProductPopoverProps) {
    const { dispatch } = useCart();
    const defaultCurrency = import.meta.env.VITE_DEFAULT_CURRENCY || "COP";

    // Step 1: Size first
    const sizeField = getSizeField(variants);
    const sizeOptions = useMemo(() => {
        if (!sizeField) return [];
        return [...new Set(variants.map((v) => v[sizeField]).filter(Boolean))] as string[];
    }, [variants, sizeField]);
    const hasSizes = sizeOptions.length > 1;

    const [selectedSize, setSelectedSize] = useState<string | null>(
        sizeOptions.length === 1 ? sizeOptions[0] : null
    );

    // Filter by selected size
    const sizeFilteredVariants = useMemo(() => {
        if (!hasSizes || !selectedSize || !sizeField) return variants;
        return variants.filter((v) => v[sizeField] === selectedSize);
    }, [variants, hasSizes, selectedSize, sizeField]);

    // Step 2: Color options (only after size is selected, or if no sizes exist)
    const colorOptions = useMemo(() => {
        const colors = sizeFilteredVariants
            .map((v) => v.color)
            .filter((c): c is string => !!c && c.trim() !== "");
        return [...new Set(colors)];
    }, [sizeFilteredVariants]);
    const showColorStep = hasSizes ? !!selectedSize : true;
    const hasColors = showColorStep && colorOptions.length > 1;

    const [selectedColor, setSelectedColor] = useState<string | null>(
        colorOptions.length === 1 ? colorOptions[0] : null
    );

    // Filter by selected color
    const colorFilteredVariants = useMemo(() => {
        if (!hasColors || !selectedColor) return sizeFilteredVariants;
        return sizeFilteredVariants.filter((v) => v.color === selectedColor);
    }, [sizeFilteredVariants, hasColors, selectedColor]);

    // Auto-select when only one variant remains, clear when none match
    const [selectedId, setSelectedId] = useState<string | null>(null);

    useEffect(() => {
        if (colorFilteredVariants.length === 1) {
            setSelectedId(colorFilteredVariants[0].id);
        } else {
            setSelectedId(null);
        }
    }, [colorFilteredVariants]);

    const handleSizeChange = (size: string) => {
        setSelectedSize(size);
        setSelectedId(null);
        setSelectedColor(null);
    };

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
        setSelectedId(null);
    };

    const selected = colorFilteredVariants.find((v) => v.id === selectedId) || null;
    const priceProduct = selected || colorFilteredVariants[0];

    const sizeText = sizeField ? getSizeLabel(sizeField) : "Tamaño";

    const handleAddToCart = () => {
        if (!selected) return;
        dispatch({ type: "ADD_ITEM", productId: selected.id, pageId });
        onClose();
    };

    return (
        <div
            className="absolute z-30 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-72 animate-in fade-in zoom-in-95 duration-200"
            style={style}
        >
            <button
                onClick={onClose}
                className="absolute cursor-pointer top-2 right-2 text-gray-400 hover:text-gray-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="flex flex-col gap-2">
                {selected?.image && (
                    <img src={selected.image} alt={name} className="w-full h-32 object-cover rounded-md mb-2" />
                )}

                <h3 className="font-bold text-lg leading-tight text-gray-900">{name}</h3>

                {referencia && (
                    <p className="text-sm text-gray-500">{referencia}</p>
                )}

                {priceProduct?.variant && (
                    <p className="text-sm text-gray-500">{priceProduct.variant}</p>
                )}

                {priceProduct?.price && (
                    <p className="font-semibold text-gray-900 mt-1">
                        {priceProduct.currency || defaultCurrency} {priceProduct.price.toLocaleString()}
                    </p>
                )}

                {/* Step 1: Size chooser */}
                {hasSizes && (
                    <div className="mt-2">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{sizeText}</label>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {sizeOptions.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeChange(size)}
                                    className={cn(
                                        "px-2.5 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer",
                                        selectedSize === size
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                    )}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Color chooser (only after size is selected) */}
                {hasColors && (
                    <div className="mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Color</label>
                        <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {colorOptions.map((color) => (
                                <button
                                    key={color}
                                    onClick={() => handleColorChange(color)}
                                    className={cn(
                                        "px-2.5 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer",
                                        selectedColor === color
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                    )}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                <button
                    onClick={handleAddToCart}
                    disabled={!selected}
                    className="cursor-pointer mt-3 w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    {selected ? "Add to Cart" : hasSizes && !selectedSize ? `Select a ${sizeText.toLowerCase()}` : hasColors ? "Select a color" : "Select an option"}
                </button>
            </div>
        </div>
    );
}
