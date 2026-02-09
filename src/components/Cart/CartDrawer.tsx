import { useEffect, useRef } from "react";
import { useCart } from "../../cart/CartContext";
import { CartItemRow } from "./CartItemRow";
import { getWhatsAppLink } from "../../cart/whatsapp";
import { cn } from "../../utils/cn";
import { useProducts } from "../../context/ProductContext";

export function CartDrawer() {
    const { state, dispatch } = useCart();
    const { getProduct } = useProducts();
    const drawerRef = useRef<HTMLDivElement>(null);
    const defaultCurrency = import.meta.env.VITE_DEFAULT_CURRENCY || "COP";
    const { items, isOpen } = state;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) {
                dispatch({ type: "CLOSE_CART" });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, dispatch]);

    const totalPrice = items.reduce((acc, item) => {
        const p = getProduct(item.productId);
        return acc + (p?.price || 0) * item.quantity;
    }, 0);

    const hasPrices = items.some(item => getProduct(item.productId)?.price);
    const whatsappLink = getWhatsAppLink(items, getProduct);


    return (
        <>
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/20 backdrop-blur-sm z-50 transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => dispatch({ type: "CLOSE_CART" })}
            />

            {/* Drawer */}
            <div
                ref={drawerRef}
                className={cn(
                    "fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                    <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
                    <div className="flex items-center gap-2">
                        {items.length > 0 && (
                            <button
                                onClick={() => {
                                    if (window.confirm("Are you sure you want to remove all items from the cart?")) {
                                        dispatch({ type: "CLEAR_CART" });
                                    }
                                }}
                                className="text-xs font-medium text-red-500 hover:text-red-700 underline px-2 py-1 rounded hover:bg-red-50 transition-colors mr-2"
                            >
                                Delete all
                            </button>
                        )}
                        <button
                            onClick={() => dispatch({ type: "CLOSE_CART" })}
                            className="p-2 hover:bg-gray-100 rounded-full text-gray-500"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400 p-8 text-center">
                            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                            <p>Your cart is empty.</p>
                            <button
                                onClick={() => dispatch({ type: "CLOSE_CART" })}
                                className="mt-4 text-blue-600 hover:underline"
                            >
                                Start browsing
                            </button>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-100">
                            {items.map(item => (
                                <CartItemRow
                                    key={`${item.productId}-${item.pageId}`} // Unique key needs pageId too if we want to separate, but standard cart groups by ID usually. 
                                    // Our reducer assumes grouping by ProductID but *initially* adds separately? 
                                    // Wait, reducer checks `existingIndex`. If we add same product from different page, it merges into one item.
                                    // So pageId will be just the FIRST one. 
                                    // unique key is productId.
                                    productId={item.productId}
                                    quantity={item.quantity}
                                    pageId={item.pageId}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {items.length > 0 && (
                    <div className="p-4 border-t border-gray-100 bg-gray-50">
                        {hasPrices && (
                            <div className="flex justify-between items-center mb-4 text-lg font-bold">
                                <span>Total:</span>
                                <span>{defaultCurrency} {totalPrice.toLocaleString()}</span>
                            </div>
                        )}

                        {whatsappLink ? (
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center justify-center w-full py-3 px-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#20bd5a] transition-colors shadow-sm active:scale-[0.98] duration-100"
                            >
                                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.374-5.03c0-5.451 4.436-9.87 9.87-9.868 2.636 0.001 5.115 1.026 6.979 2.89 1.864 1.865 2.891 4.341 2.891 6.974 0 5.452-4.436 9.865-9.87 9.865" /></svg>
                                Buy via WhatsApp
                            </a>
                        ) : (
                            <div className="text-center text-sm text-gray-500 bg-gray-100 p-2 rounded-lg">
                                Checkout is currently disabled (No WhatsApp #)
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
