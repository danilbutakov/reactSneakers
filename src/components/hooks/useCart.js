import React from "react";
import AppContext from "../../context";

export const useCart = () => {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const totalPrice = cartItems.reduce(function (sum, elem) {
        return Number(sum) + Number(elem.price);
    }, 0);
    return {cartItems, setCartItems, totalPrice};
}