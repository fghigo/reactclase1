import './App.css';

import NavBar from './components/NavBar';
import ItemlistContainer from './components/ItemList/ItemlistContainer'
 

function App() {
  const title = "Titulo de Tienda";
   return (
    <>
      <NavBar/>
      <ItemlistContainer/>
                
    </>
  );
}

export default App;
