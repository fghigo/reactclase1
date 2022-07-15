import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from ".//components/ItemList/ItemListContainer";

function App() {
  const title = "Titulo de Tienda";
   return (
    <>
      <NavBar/>
      <ItemListContainer/>
                
    </>
  );
}

export default App;
