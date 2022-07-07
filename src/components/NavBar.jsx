import CartWidget from "./CartWidget";

const NavBar = (props) => {
    console.log(props);
    return (

<nav className="navbar navbar-expand-xl navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Mi TiendA! </a>
    
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse show" id="navbarDark">
      <ul className="navbar-nav me-auto mb-2 mb-xl-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">OfertAs! </a>
        </li>
      </ul>
      <CartWidget/>
      
      <form className="d-flex">
        <input className="form-control me-2" type="search"  aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">BuscAr! </button> 
      </form>
      </div>
      
  </div>
</nav>
  );
};

export default NavBar;