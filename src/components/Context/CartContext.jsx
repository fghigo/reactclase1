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

  const sendOrder =(totalPrice, buyerData) => {
    const db = getFirestore();
    const orderCollection = collection(db, "orden");
    const order = {
      items: cartItems,
      total: totalPrice,
      buyer: buyerData,
    }
    addDoc(orderCollection, order).then(res => console.log(res.id));};

   


   
   


     const remove = (itemId)=>{
      setCartItems(cartItems.filter((element)=> element.Item.id !== itemId))
    };

    const clear = ()=>{setCartItems([])};

    const total = () => {
        return cartItems.reduce(
          (valorAnterior, valorActual) => valorAnterior + valorActual.Item.Precio * valorActual.quantity,
          0
        );
      };

    return (
        <Acontext.Provider value={{cartItems , setCartItems, sendOrder, howMany, remove, clear}}>
            {children}
        </Acontext.Provider>);
    
};



export default CartContext;



    
    /*  total: totalPrice,
      buyer: buyerData,
   
    const batch = writeBatch(db);
    const idList = cartItems.map((producto) => producto.item.id);
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
  


export default CartContext;*/