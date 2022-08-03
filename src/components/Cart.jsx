import React, {useContext} from "react";
import { CartContext } from "./Context/CartContext";

const Cart = () => { 
    const CartItems = useContext(CartContext);
    
    return <> { CartItems.map((element)=> element.Item.Nombre)}</>
};



export  default Cart;