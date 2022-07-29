import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [CartItems , setCartItems] = useState([]);
    const addItem= (Item ,quantity)=>{
        let iic = isInCart(Item.id);
        if(iic>-1){
            let Cart = CartItems;
            Cart[iic].quantity+=quantity;
            setCartItems(Cart)
        }else{
            setCartItems((prevState) => [...prevState, {...Item,"quantity":quantity}])
        }
    }
    const howMany = ()=>{return CartItems.length}
    const remove = (itemId)=>{
        let Cart = CartItems;
        console.log(Cart);
        Cart.splice(isInCart(itemId),1);
        console.log(Cart);
        setCartItems(Cart)
    }
    const clear = ()=>{setCartItems([])}
    const isInCart = (id)=>{return CartItems.findiic(e=>{return e.id === id ? true : false })}
    console.log(CartItems)
    return(
        <CartContext.Provider value={{CartItems , setCartItems, addItem, howMany, remove, clear, isInCart }}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;