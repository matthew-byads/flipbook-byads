export type CartItem = {
    productId: string;
    quantity: number;
    pageId?: string;
};

export type CartState = {
    items: CartItem[];
    isOpen: boolean;
};

export type CartAction =
    | { type: "ADD_ITEM"; productId: string; pageId?: string }
    | { type: "REMOVE_ITEM"; productId: string }
    | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
    | { type: "CLEAR_CART" }
    | { type: "TOGGLE_CART" }
    | { type: "OPEN_CART" }
    | { type: "CLOSE_CART" };
