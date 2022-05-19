import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductsForm from './components/ProductsForm';
import DisplayAll from './views/DisplayAll'
import ShowOne from './views/ShowOne';
import Update from './views/Update';

function App() {
  
  return (
    <BrowserRouter>
    <ProductsForm/>
    <Link to="/products">| DisplayAll</Link>
    <Link to="/products/new">| Create Product | </Link>
    

      <Routes>
          <Route path= "/products" element = {<DisplayAll/>} />
          <Route path= "/products/new" element ={<ProductsForm/>} />
          <Route path= "/products/:id" element ={<ShowOne/>} />
          <Route path= "/products/:id/edit" element ={<Update/>} />
      </Routes>


      </BrowserRouter>
  );
}

export default App;
