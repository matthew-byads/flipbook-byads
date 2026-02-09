import { type Product } from "../../data/products";
import { useCart } from "../../cart/CartContext";

type ProductPopoverProps = {
    product: Product;
    onClose: () => void;
    pageId: string; // Origin page
    style?: React.CSSProperties;
};

export function ProductPopover({ product, onClose, pageId, style }: ProductPopoverProps) {
    const { dispatch } = useCart();
    const defaultCurrency = import.meta.env.VITE_DEFAULT_CURRENCY || "COP";

    const handleAddToCart = () => {
        dispatch({ type: "ADD_ITEM", productId: product.id, pageId });
        // Optional: close popover or show feedback. For now, keep it simple.
        // onClose(); // Maybe don't close immediately so they can see it added?
        // But usually popovers auto-close or we want to seek confirmation.
        // The cart drawer auto-opens on add, so that might be enough feedback.
        onClose();
    };

    return (
        <div
            className="absolute z-30 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-64 animate-in fade-in zoom-in-95 duration-200"
            style={style}
        >
            <button
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className="flex flex-col gap-2">
                {product.image && (
                    <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-md mb-2" />
                )}

                <h3 className="font-bold text-lg leading-tight text-gray-900">{product.name}</h3>

                <div className="text-sm text-gray-500 space-y-0.5">
                    {product.sku && <p>SKU: {product.sku}</p>}
                    {product.variant && <p>{product.variant}</p>}
                </div>

                {product.price && (
                    <p className="font-semibold text-gray-900 mt-1">
                        {product.currency || defaultCurrency} {product.price.toLocaleString()}
                    </p>
                )}

                <button
                    onClick={handleAddToCart}
                    className="mt-3 w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 active:scale-95 duration-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
