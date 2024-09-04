
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from '../src/Components/Nav.jsx';
import Home from '../src/Components/Home.jsx';
import Servicenow from './Components/Servicenow.jsx';
import data from './Components/Collection.json';
import Car from './Components/Car.jsx';
import NavCollection from './Components/NavCollection.jsx';
import Product from './Components/Product.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
 
 
function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
        <Route 
          path="/sreecars/" 
          element={
            <>
              <Home /> 
              <Servicenow /> 
              <Car  CarCollection={data} />
              
            </>
          } 
        />
        <Route path="/sreecars/product/:id" element={<Product collections={data} />} />
        <Route path="/sreecars/NavCollection" element={<NavCollection />} />
        <Route path="/sreecars/About" element={<About />} />
        <Route path="/sreecars/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
     
  );
}

export default App;
