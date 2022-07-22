

import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail ({producto}){
    return (
        <div style={{backgroundColor : "aliceblue"}}>
        <h4> {producto.Nombre} </h4>
        <p> {producto.Marca} </p>
        <small> ${producto.Precio} </small>
        <br />
        <img src={producto.Img} alt="Img" />
        <br />
        <p>{producto.Descripcion}</p>
        <br/>
        {producto.Stock < 3 ?
         <h5 className="bg-warning">Quedan solo {producto.Stock} unidades!</h5> :
         <h5 className="bg-primary">Quedan {producto.Stock} unidades!</h5>}
        <ItemCount stock={producto.Stock} initial={1}/>
        <hr />
        <br />
        </div>

    )
};



export default ItemDetail;