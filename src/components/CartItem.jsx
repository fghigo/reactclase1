import React from "react";

const CartItem =({Item, quantity, remove}) => {

    return <div className="flex">       
              {Item.Nombre} - {Item.Marca} - {Item.Precio} - {quantity}
            <button className="bg-danger" onClick={() => remove(Item.id)}>
               Eliminar
          </button>
           </div>;
    
};

export default CartItem;