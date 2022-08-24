import React from "react";
import {Link} from "react-router-dom";


function Item ({Base}){
    return (
        <div className="card" style={{ width: "15rem" }}>
      <img className="card-img-top" src={Base.Img} alt="Card image cap" />
      <div className="card-body d-flex flex-column justify-content-center">
        <h3 className="card-title">{Base.Nombre}</h3>
        <p className="card-text">{Base.Marca}</p>
        <Link to={`/detail/${Base.id}`}>
          <button className="btn btn-primary">Ver mas</button>
        </Link>
      </div>
    </div>
       
       
    )
};



export default Item;
