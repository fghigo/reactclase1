import React from "react";
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



export default Cart;