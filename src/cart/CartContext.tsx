import React, { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer, initialCartState } from "./cartReducer";
import { type CartState, type CartAction } from "./cartTypes";
import { loadCart, saveCart } from "./cartStorage";

type CartContextType = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    // Initialize from local storage
    const [state, dispatch] = useReducer(cartReducer, {
        ...initialCartState,
        items: loadCart(),
    });

    // Persist to local storage whenever items change
    useEffect(() => {
        saveCart(state.items);
    }, [state.items]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
