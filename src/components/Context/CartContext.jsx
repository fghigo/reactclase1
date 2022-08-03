import React, {createContext, useState} from "react";

export const Acontext = createContext();

const CartContext = ({children}) => {
    const [CartItems , setCartItems] = useState([]);


    const addItem= (Item ,quantity)=>{
        const newItem = isInCart(Item);
        if (newItem){
            quantity= quantity + newItem.quantity;
            setCartItems(CartItems.splice(CartItems.findIndex((element)=> element.Item.id === Item.id),
             1));
        }
        setCartItems([...CartItems, {Item ,quantity}]);
    }
       
    const isInCart = (Item) => { return
        CartItems.find ((element)=> element.Item === Item)};

    


    const howMany = ()=>{return CartItems.length};

    const remove = (itemId)=>{
      setCartItems(CartItems.filter((element)=> element.Item.id !== itemId))
    };

    const clear = ()=>{setCartItems([])};

    return(
        <Acontext.Provider value={{CartItems , setCartItems, addItem, howMany, remove, clear, isInCart }}>
            {children}
        </Acontext.Provider>
    );
};



export default CartContext;