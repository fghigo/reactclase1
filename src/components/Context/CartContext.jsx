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
       
    const isInCart = (Item) => { return (
        CartItems.find ((element)=> element.Item === Item))};

    


    const howMany = ()=>{return CartItems.length};

    const remove = (itemId)=>{
      setCartItems(CartItems.filter((element)=> element.Item.id !== itemId))
    };

    const clear = ()=>{setCartItems([])};

    const total = () => {
        return CartItems.reduce(
          (valorAnterior, valorActual) => valorAnterior + valorActual.Item.Precio * valorActual.quantity,
          0
        );
      };

    return (
        <Acontext.Provider value={{CartItems , setCartItems, total, addItem, howMany, remove, clear, isInCart }}>
            {children}
        </Acontext.Provider>);
    
};



export default CartContext;