import React from "react";


function Item ({Base}){
    return (
        <div>
        <h4> {Base.Nombre} </h4>
        <p> {Base.Marca} </p>
        <small> ${Base.Precio} </small>
        <br />
        <img src={Base.Img} alt="Img" />
        <hr />
        <br />
        </div>

    )
};



export default Item;
