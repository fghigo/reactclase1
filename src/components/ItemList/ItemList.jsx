import React from "react";

function ItemList (props) {
    console.log ("Render ItemList", props.dataitems);

    return (
            <>
                <h1> Listado </h1>
                {props.dataitems.map ((cadaItem) => {
                    return (
                     <div key = {cadaItem.id}>
                     <p> {cadaItem.Nombre} </p>
                     <p> {cadaItem.Marca} </p>
                     <p> {cadaItem.Precio} </p>
                     </div>
                    );
                    }
                    )
                }
            </>
            );
                
          }
               

            
            
                      
       

export default ItemList;
