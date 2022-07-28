

import React from "react";
import {useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";


function ItemDetail ({producto}){
    const [amount, setAmount] = useState(0);
    const onAdd = (amount) =>
    { setAmount(amount);
    };
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
        {amount == 0 && <ItemCount stock={producto.Stock} initial={0} onAdd={onAdd}/>}
        <hr />
        <br />
        <Link to="/cart"><button >Finalizar Compra</button></Link>
        </div>

    )
};



export default ItemDetail;