import { useState } from "react";
import { type Product } from "../../data/products";
import { useCart } from "../../cart/CartContext";
import { getSizeField, getSizeLabel } from "../../utils/productSize";
import { cn } from "../../utils/cn";

type ProductPopoverProps = {
    variants: Product[]; // Variants matching the hotspot's name (+ size); customer picks a color
    name: string;
    size?: string;
    onClose: () => void;
    pageId: string; // Origin page
    style?: React.CSSProperties;
};

const colorLabel = (p: Product) => p.referencia || p.color || "Default";

export function ProductPopover({ variants, name, size, onClose, pageId, style }: ProductPopoverProps) {
    const { dispatch } = useCart();
    const defaultCurrency = import.meta.env.VITE_DEFAULT_CURRENCY || "COP";

    // Preselect when there is only one variant to choose from.
    const [selectedId, setSelectedId] = useState<string | null>(
        variants.length === 1 ? variants[0].id : null
    );
    const selected = variants.find((v) => v.id === selectedId) || null;
    const priceProduct = selected || variants[0];

    const sizeField = getSizeField(variants);
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

                <div className="text-sm text-gray-500 space-y-0.5">
                    {size && <p>{sizeText}: {size}</p>}
                    {priceProduct?.variant && <p>{priceProduct.variant}</p>}
                </div>

                {priceProduct?.price && (
                    <p className="font-semibold text-gray-900 mt-1">
                        {priceProduct.currency || defaultCurrency} {priceProduct.price.toLocaleString()}
                    </p>
                )}

                {/* Color chooser */}
                <div className="mt-2">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Color</label>
                    <div className="flex flex-wrap gap-1.5 mt-1.5 max-h-32 overflow-y-auto">
                        {variants.map((v) => {
                            const isSelected = selectedId === v.id;
                            return (
                                <button
                                    key={v.id}
                                    onClick={() => setSelectedId(v.id)}
                                    className={cn(
                                        "px-2.5 py-1.5 rounded-lg text-xs border transition-colors cursor-pointer",
                                        isSelected
                                            ? "bg-black text-white border-black"
                                            : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                                    )}
                                >
                                    {colorLabel(v)}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <button
                    onClick={handleAddToCart}
                    disabled={!selected}
                    className="cursor-pointer mt-3 w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    {selected ? "Add to Cart" : "Select a color"}
                </button>
            </div>
        </div>
    );
}
