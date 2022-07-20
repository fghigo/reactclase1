import './App.css';

import NavBar from './components/NavBar';
/*import ItemlistContainer from './components/ItemList/ItemlistContainer'*/
import ItemDetailContainer from './components/ItemDetailContainer'; 

function App() {
  const title = "Titulo de Tienda";
   return (
    <>
      <NavBar/>
      {/*<ItemlistContainer/>*/}
      <ItemDetailContainer/>
                
    </>
  );
}

export default App;
