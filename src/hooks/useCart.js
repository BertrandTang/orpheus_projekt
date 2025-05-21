import { CartContext } from "../context/CartContext";
import {useContext } from "react";

export default function useCart () {

    const { dispatch, cartCount } = useContext(CartContext);

    const addToCart = () => dispatch({ type: "increment" }) ;
    const removeFromCart = () => dispatch({ type: "decrement" });

    return { cartCount, addToCart, removeFromCart };
};
