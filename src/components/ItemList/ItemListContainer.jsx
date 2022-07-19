import React, { useState, useEffect } from "react";
import BasedeDatos from "./BasedeDatos/BasedeDatos";
import ItemList from "./ItemList";

function ItemListContainer() {

   
    let [Items, setItems] = useState([]);

    useEffect(
        () => {
            let promiseItems = new Promise((resolve, reject) => {
                setTimeout(
                    () => {
                        resolve(BasedeDatos);
                    },
                    2000);
            });

            promiseItems.then(
                (respuesta) => {
                    setItems(BasedeDatos);
                }
            ).catch(
               (errorMsg) => console.error(errorMsg)
            )
        
        },
        []
    )

  

   



return (
    <div className="flex flex-col text-center">
   <ItemList Datos={Items}/>
   </div>
);
}



export default ItemListContainer;