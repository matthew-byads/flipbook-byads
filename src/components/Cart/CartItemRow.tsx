import { useCart } from "../../cart/CartContext";
import { useProducts } from "../../context/ProductContext";

type CartItemRowProps = {
    productId: string;
    quantity: number;
    pageId?: string;
};

export function CartItemRow({ productId, quantity, pageId }: CartItemRowProps) {
    const { dispatch } = useCart();
    const { getProduct } = useProducts();
    const product = getProduct(productId);
    const defaultCurrency = import.meta.env.VITE_DEFAULT_CURRENCY || "COP";

    if (!product) return null;

    return (
        <div className="flex items-start gap-4 p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                {product.image ? (
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
                <div className="text-xs text-gray-500 mb-1">
                    {product.sku && <span className="mr-2">SKU: {product.sku}</span>}
                    {product.variant && <span>{product.variant}</span>}
                </div>

                {pageId && (
                    <div className="text-xs text-blue-600 bg-blue-50 inline-block px-1.5 py-0.5 rounded mb-2">
                        From page {pageId}
                    </div>
                )}

                <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-8">
                        <button
                            onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId, quantity: quantity - 1 })}
                            className="w-8 h-full hover:bg-gray-100 flex items-center justify-center text-gray-600"
                        >
                            -
                        </button>
                        <div className="w-8 h-full flex items-center justify-center text-sm font-medium border-l border-r border-gray-100 bg-white">
                            {quantity}
                        </div>
                        <button
                            onClick={() => dispatch({ type: "UPDATE_QUANTITY", productId, quantity: quantity + 1 })}
                            className="w-8 h-full hover:bg-gray-100 flex items-center justify-center text-gray-600"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex flex-col items-end">
                        {product.price ? (
                            <span className="font-medium text-gray-900">
                                {product.currency || defaultCurrency} {(product.price * quantity).toLocaleString()}
                            </span>
                        ) : (
                            <span className="text-xs text-gray-400">No price</span>
                        )}
                        <button
                            onClick={() => dispatch({ type: "REMOVE_ITEM", productId })}
                            className="text-xs text-red-400 hover:text-red-600 underline mt-1"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
