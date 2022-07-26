import './App.css';
import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemList/ItemlistContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const title = "Titulo de Tienda";
   return (
    <>
    <BrowserRouter>
      <NavBar/>
    <Routes>
       <Route index path='/' element={<ItemlistContainer/>}/>
       <Route path="/category/:title" element={<ItemlistContainer/>}/>
       <Route path="/detail/:id"  element={<ItemDetailContainer/>} />
       <Route path="/cart" element={<div>Pagina de Cart </div>}/>
       <Route 
        path="*"
        element={
        <div style={{backgroundColor: "red"}}>ERROR 404 PAGE NOT FOUND</div>
                }
        />
    </Routes>
    </BrowserRouter>
                
    </>
  );
}

export default App;



