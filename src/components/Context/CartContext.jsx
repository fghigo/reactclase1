/*import React, {createContext, useState} from "react";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

export const Acontext = createContext();

const CartContext = ({children}) => {
    const [CartItems , setCartItems] = useState([]);

    const sendOrder = () =>{
      const db = getFirestore();
      const orderCollection = collection (db, "orders");
      const order = {items : CartItems,}
      addDoc(orderCollection, order).then((res) => console.log (res.id))
    }




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



export default CartContext;*/

import React, { createContext, useState } from "react";
import {
  addDoc,
  collection,
  getFirestore,
  writeBatch,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

export const Acontext = createContext();

const CartContext = ({children}) => {
  const [cartItems , setCartItems] = useState([]);
  const howMany = ()=>{return cartItems.length};

  const sendOrder = async (totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    };
    const batch = writeBatch(db);
    const idList = cartItems.map((producto) => producto.items.Id);
    const withoutStock = [];
    const collectionRef = collection(db, "items");
    const docsResponse = await getDocs(
      query(collectionRef, where(documentId(), "orders", idList))
    );
    docsResponse.docs.forEach((doc) => {
      const dataDoc = doc.data();
      const prod = cartItems.find((prod) => prod.item.id === doc.id);

      if (dataDoc.stock >= prod.quantity) {
        batch.update(doc.ref, { stock: dataDoc.stock - prod.quantity });
      } else {
        withoutStock.push({ prod });
      }
    });
    if (withoutStock.length === 0) {
      const addResponse = await addDoc(orderCollection, order);
      batch.commit();
      alert(`Your oder number is: ${addResponse.id}`);
    } else {
      alert(
        "The purchase wasn't completed. There aren't enough items in stock"
      );
    }
  };



  return (
    <Acontext.Provider value={{cartItems , setCartItems, sendOrder, howMany }}>
        {children}
    </Acontext.Provider>);
  
};

export default CartContext;