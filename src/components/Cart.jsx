import React from "react";
import { useContext } from "react";
import { Acontext } from "./Context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
    const {CartItems} = useContext(Acontext);
    return ( <>{
        CartItems.map ((element) => (<CartItem Item={element.Item}/>)
        )}</>
    );
};



export default Cart;