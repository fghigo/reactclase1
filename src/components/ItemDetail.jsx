

import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail ({producto}){
    return (
        <div>
        <h4> {producto.Nombre} </h4>
        <p> {producto.Marca} </p>
        <small> ${producto.Precio} </small>
        <br />
        <img src={producto.Img} alt="Img" />
        <br />
        <ItemCount stock={producto.Stock} initial={1}/>
        <hr />
        <br />
        </div>

    )
};



export default ItemDetail;