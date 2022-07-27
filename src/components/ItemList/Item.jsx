import React from "react";
import {Link} from "react-router-dom";


function Item ({Base}){
    return (
        <div>
        <h4> {Base.Nombre} </h4>
        <p> {Base.Marca} </p>
        <Link to ={`/detail/${Base.id}`}>
        <button className="btn btn-primary">Mas Info</button>
        </Link>
        <br/>
        <img src={Base.Img} alt="Img" />
        <hr />
        <br />
        </div>

    )
};



export default Item;
