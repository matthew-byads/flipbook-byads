import { type CartState, type CartAction, type CartItem } from "./cartTypes";


export const initialCartState: CartState = {
    items: [],
    isOpen: false,
};

export function cartReducer(state: CartState, action: CartAction): CartState {
    let newState: CartState;

    switch (action.type) {
        case "ADD_ITEM": {
            const existingIndex = state.items.findIndex(
                (item) => item.productId === action.productId
            );

            let newItems: CartItem[];
            if (existingIndex >= 0) {
                newItems = [...state.items];
                newItems[existingIndex] = {
                    ...newItems[existingIndex],
                    quantity: newItems[existingIndex].quantity + 1,
                    // Keep original pageId as per requirements
                };
            } else {
                newItems = [
                    ...state.items,
                    { productId: action.productId, quantity: 1, pageId: action.pageId },
                ];
            }
            newState = { ...state, items: newItems, isOpen: true }; // Auto-open on add
            break;
        }
        case "REMOVE_ITEM": {
            newState = {
                ...state,
                items: state.items.filter((item) => item.productId !== action.productId),
            };
            break;
        }
        case "UPDATE_QUANTITY": {
            if (action.quantity <= 0) {
                newState = {
                    ...state,
                    items: state.items.filter((item) => item.productId !== action.productId),
                };
            } else {
                newState = {
                    ...state,
                    items: state.items.map((item) =>
                        item.productId === action.productId
                            ? { ...item, quantity: action.quantity }
                            : item
                    ),
                };
            }
            break;
        }
        case "CLEAR_CART":
            newState = { ...state, items: [] };
            break;
        case "TOGGLE_CART":
            newState = { ...state, isOpen: !state.isOpen };
            break;
        case "OPEN_CART":
            newState = { ...state, isOpen: true };
            break;
        case "CLOSE_CART":
            newState = { ...state, isOpen: false };
            break;
        default:
            return state;
    }

    // Side effect: persist to storage
    // Note: reducers should be pure, but for simplicity in this hook-based setup 
    // we often sync here or in useEffect. sticking to pure reducer + useEffect in Context is better.
    // I will move persistence to the Context to play nice with React purity rules.
    return newState;
}
