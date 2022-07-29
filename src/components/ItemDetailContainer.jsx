import React, { useState, useEffect } from "react";
import BasedeDatos from "../components/ItemList/BasedeDatos/BasedeDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({setAmountItems}) => {
     const {id} = useParams();
     console.log(id);   
     const [producto, setProducto] = useState({});
    useEffect(
        () => {
            const promiseproducto = new Promise((resolve) => {
                setTimeout(
                    () => {
                        resolve(BasedeDatos);
                    },
                    2000);
            });

            promiseproducto.then(
                (respuesta) => {  
                    const Productos = respuesta.find((Productos) => Productos.id == id );
                    setProducto(Productos); });              
                            },               
                []
               );

return (
    <div className="flex flex-col text-center">
   <ItemDetail setAmountItems={setAmountItems} producto={producto}/>
   </div>
);
}


export default ItemDetailContainer;