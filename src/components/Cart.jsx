/*import React from "react";
import { useContext } from "react";
import { Acontext } from "./Context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const {CartItems, remove, total, clear} = useContext(Acontext);
    const Totl = total();
    return ( 
        <>
      {CartItems.length === 0 ? (
        <>
          Agrega productos!
          <Link to={"/"}>Volver</Link>
        </>
      ) : (
    
        <>{       
        CartItems.map ((producto) => (<CartItem Item={producto.Item} quantity={producto.quantity} remove={remove}/>)
         )}

         <button className="btn btn-primary rounded-lg"  onClick={()=>clear()}>Vaciar el carrito?</button>

        <h3>Total de su compra: {Totl} </h3>
         
         </>
      )};
      </>
    );
};



export default Cart;*/

import React, { useContext, useEffect, useState } from "react";
import { Acontext } from "./Context/CartContext";
import Item from "./ItemList/Item";
import { Link } from "react-router-dom";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems, sendOrder, remove, total, clear } = useContext(Acontext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = document.getElementsByTagName("input");
    const data = Array.from(inputs).map((input, index) => input.value);
    console.log (data);
    sendOrder(totalPrice, { name: data[0], mail: data[1], phone: data[2] });
    // updateOrder();
    // multipleUpdates();
  };
  useEffect(() => {
    let total = 0;
    cartItems.forEach(({ producto, quantity }) => {
      total += parseInt(producto.Precio) * quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);
  return (
    <>
     {cartItems.length === 0 ? (
        <>
          Agrega productos!
          <Link to={"/"}>Volver</Link>
        </>
      ) : (
    
        <>{       
        cartItems.map ((producto) => (<cartItems Item={producto.Item} quantity={producto.quantity} remove={remove}/>)
         )}

         <button className="btn btn-primary rounded-lg"  onClick={()=>clear()}>Vaciar el carrito?</button>

        <h3>Total de su compra: {totalPrice} </h3>
        </>
      )};
      
      <ul>
         {cartItems.map (({ producto, quantity }) => (
           <>
            <div key={producto.Id} className="card" style={{ width: "20rem" }}>
              <img
                className="card-img-top"
                src={producto.Img}
                alt="Card image cap"
                />
              <div className="card-body d-flex flex-column justify-content-center">
                <h5 className="card-title">{producto.Nombre}</h5>
                <p className="card-text">{`${producto.Stock} units available!`}</p>
             
              </div>
            </div>
          </>
        ))}
      </ul>
      <h1 className="bg-primary">{`El totA!l es: $${totalPrice}`}</h1>
      <form onSubmit={handleSubmit}>
        <input type={"text"} />
        <input type={"email"} />
        <input type={"tel"} />
        <button
           onClick={() => sendOrder(totalPrice)}
           type="submit"
           className="btn btn-info"
           >
          Finalizar comprA!
        </button>
      </form>
    </>  
    )
};

export default Cart;