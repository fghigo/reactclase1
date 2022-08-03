import React from "react";

const CartItem =({Item, quantity, clear}) => {
    return <div className="flex">{Item.title} - {Item.Precio} - {quantity}
     <button  onClick={() => clear()}>
          "Vaciar Carro? "
    </button>
    
    </div>;
};

export default CartItem;