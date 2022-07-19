import React from "react";
import Item from "./Item";



function ItemList ( {Datos} ) {
   

    return (
            <>
            <h1>Listado de Productos</h1>
               { Datos.map (thisBase => {
                    return (
                     <Item Base={thisBase} key={thisBase.id}/>
                     );
                    }
                    )
                }
            </>
            );
                
          }        
       

export default ItemList;
