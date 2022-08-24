

import React from "react";
import {useState, useContext} from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {Acontext } from "./Context/CartContext";


function ItemDetail ({producto}){
    const {setCartItems} = useContext(Acontext);
    const [amount, setAmount] = useState(0);
    const onAdd = (amount) => {
      setAmount(amount);
      setCartItems((prevState) => [...prevState, { producto, quantity: amount }]);
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
        {producto.Stock < 10 ?
         <h5 className="bg-warning">Quedan solo {producto.Stock} unidades!</h5> :
         <h5 className="bg-primary">Quedan {producto.Stock} unidades!</h5>}
        {amount == 0 && <ItemCount stock={producto.Stock} initial={0} onAdd={onAdd}/>}
        <hr />
        <br />
        <Link to="/Cart"><button className="btn btn-primary" >Continuar Compra</button></Link>
        </div>

    )
};



export default ItemDetail;
/*
import { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import {Acontext } from "./Context/CartContext";

const ItemDetail = ({item}) => {
  const { setCartItems } = useContext(Acontext);
  const [amount, setAmount] = useState(0);
  const { nombre, marca, precio, img, descripcion, stock} = item;
  const onAdd = (amount) => {
    setAmount(amount);
    setCartItems((prevState) => [...prevState, { item, quantity: amount }]);
  };
  return (
    <div className="card" style={{ width: "20rem" }}>
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{`${stock} units available!`}</p>
        <p className="card-text">{`${precio} pesos` }</p>
      </div>
      {amount == 0 && <ItemCount stock={stock} initial={0} onAdd={onAdd} />}
      <div className="d-flex justify-content-center my-3">
        <Link to="/Cart">
          <button className="btn btn-warning">Finalizar Compra</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetail;*/