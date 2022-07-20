import React, { useState, useEffect } from "react";
import BasedeDatos from "../components/ItemList/BasedeDatos/BasedeDatos";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

   
    let [producto, setProducto] = useState([]);

    useEffect(
        () => {
            let promiseproducto = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(BasedeDatos);
                    },
                    2000);
            });

            promiseproducto.then(
                (respuesta) => {
                    setProducto(BasedeDatos [0]);
                }
                )
        
        },
        []
    )

return (
    <div className="flex flex-col text-center">
   <ItemDetail producto={producto}/>
   </div>
);
}


export default ItemDetailContainer;