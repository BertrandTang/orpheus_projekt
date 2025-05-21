import { useReducer, createContext } from "react";
import { cartReducer, initialState } from "../ reducers/cartReducers"

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [count, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ cartCount: count.cartCount, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}