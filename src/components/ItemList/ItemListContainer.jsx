import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {getDocs, collection, getFirestore} from "firebase/firestore"

const ItemListContainer = () => {

    const {title} = useParams();
     
    let [Items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemsCollection = collection (db, "items");
        getDocs (itemsCollection).then((snapshot) => {
          const data = snapshot.docs.map ((doc) => ({id: doc.id, ...doc.data() }));
          setItems(data);
          setLoading(false);
        }); 
    }, [title]) ;
    
   

return (
    <div className="flex flex-col text-center">
   <ItemList Datos={Items}/>
   </div>                 
);
     
};



export default ItemListContainer;