import { useCart } from "../../cart/CartContext";
import { cn } from "../../utils/cn";

type HeaderProps = {
    isAdmin: boolean;
    onAdminClick: () => void;
    title?: string;
};

export function Header({ isAdmin, onAdminClick, title = "Catalog" }: HeaderProps) {
    const { state, dispatch } = useCart();
    const totalItems = state.items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 h-16 px-4 flex items-center justify-between shadow-sm transition-all duration-300">
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                {title}
            </h1>

            <div className="flex items-center gap-4">
                <button
                    onClick={onAdminClick}
                    className={cn(
                        "text-xs font-medium px-3 py-1.5 rounded-full transition-colors",
                        isAdmin
                            ? "bg-red-100 text-red-700 hover:bg-red-200"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    )}
                >
                    {isAdmin ? "Admin Unlocked" : "Admin"}
                </button>

                <button
                    onClick={() => dispatch({ type: "TOGGLE_CART" })}
                    className="relative p-2 rounded-full hover:bg-gray-100 transition-colors group"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-700 group-hover:text-black transition-colors"
                    >
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    {totalItems > 0 && (
                        <span className="absolute top-0 right-0 bg-black text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full shadow-md animate-in zoom-in duration-200">
                            {totalItems}
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
}
