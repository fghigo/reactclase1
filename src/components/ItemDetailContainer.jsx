import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemDoc = doc(db, "items", id);
    getDoc(itemDoc).then((snapshot) => {
      setProducto({ ...snapshot.data(), id: snapshot.id });
      setLoading(false);
    });
  }, [id]);
        

return (
    <div className="flex flex-col text-center">
   <ItemDetail producto={producto}/>
   </div>
);
}


export default ItemDetailContainer;