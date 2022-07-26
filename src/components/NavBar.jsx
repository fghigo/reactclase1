import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


const NavBar = (props) => {
    console.log(props);
    return (

<nav className="navbar navbar-expand-xl navbar-dark bg-primary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>
      Mi TiendA!
    </Link>
   
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/category/Smart"}>SmA!rt Tv</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={"/category/celulares"}>CelulA!res</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to={"*"}>OfertA!s</Link>
        </li>
      </ul>
      
      
      <CartWidget/>
      
      </div>
      
  </div>
</nav>
  );
};

export default NavBar;