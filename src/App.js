import './App.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemList/ItemlistContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartContext from './components/Context/CartContext';
import Cart from './components/Cart';



function App() {
  const title = "Mi TiendA!";
 
   return (
    <>
    <CartContext>

    <BrowserRouter>
      <NavBar/>
    <Routes>
       <Route index path='/' element={<ItemlistContainer/>}/>
       <Route path="/category/:title" element={<ItemlistContainer/>}/>
       <Route path="/detail/:id"  element={<ItemDetailContainer />} />
       <Route path="/cart" element={<Cart/>}/>
       <Route 
        path="*"
        element={
          <div style={{backgroundColor: "red"}}>ERROR 404 PAGE NOT FOUND</div>
        }
        />
    </Routes>
    </BrowserRouter>
                
    </CartContext>
    </>
  );
}

export default App;



