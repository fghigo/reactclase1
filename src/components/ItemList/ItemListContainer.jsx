import React, { useState, useEffect } from "react";
import BasedeDatos from "./BasedeDatos/BasedeDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const {title} = useParams();
    console.log(title);   
    let [Items, setItems] = useState([]);

    useEffect( () => {
    
        const promiseItems = new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve(BasedeDatos);
                },
                2000);
            });
            
            promiseItems.then(
                (respuesta) => {
                    const productos = respuesta;
                    if (title) {
                    setItems(productos.filter((producto) => producto.Categoria === title));
                     } else {
                        setItems(productos);
                     }
                    }
                 )
             },
        [title]
    )

  

   



return (
    <div className="flex flex-col text-center">
   <ItemList Datos={Items}/>
   </div>
);
}



export default ItemListContainer;