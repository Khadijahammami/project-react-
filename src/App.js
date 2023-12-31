import ListArticles from './Components/ListArticles';
import AddArticle from './Components/AddArticle';
import EditArticle from './Components/EditArticle';
import Menu from './Menu';
import ListCards from './Components/clientSide/ListCards';
import Cart from "./Components/clientSide/Cart";
import PdfCart from "./Components/clientSide/PdfCart";
import Loginclient from "./Components/authentificationClient/loginClient";
import Signup from './Components/authentificationClient/Signup';
import { CartProvider } from "use-shopping-cart";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Panier from './Components/Panier';

function App() {
  const [panier, setPanier] = useState({});

  return(
    <CartProvider>
    
    {/*<ListArticles />*/}
     <Router>
      <Menu/>
      <Routes>
        <Route path='/AddArticle' element={<AddArticle/>}/>
        <Route path='/editArticle/:id' element={<EditArticle/>}/>
        <Route path='/' element={<ListArticles setPanier={setPanier} panier={panier} />}/>
        <Route path='/' element={<ListCards/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/pdfCart' element={<PdfCart/>}/>
        <Route path="/loginclient" exact element={<Loginclient/>}/>
        <Route path="/signup" exact element={<Signup/>}/>
        <Route path="/panier" exact element={<Panier panier={panier} />}/>
      </Routes>
      </Router>
      </CartProvider>
    
  );

}
export default App;
