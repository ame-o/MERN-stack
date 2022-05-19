import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductsForm from './components/ProductsForm';
import Dashboard from './views/Dashboard'
import ShowOne from './views/ShowOne';
import Update from './views/Update';

function App() {
  
  return (
    <BrowserRouter>
    <ProductsForm/>
    <Link to="/products">| Dashboard</Link>
    <Link to="/products/new">| Create Product | </Link>
    

      <Routes>
          <Route path= "/products" element = {<Dashboard/>} />
          <Route path= "/products/new" element ={<ProductsForm/>} />
          <Route path= "/products/:id" element ={<ShowOne/>} />
          <Route path= "/products/:id/edit" element ={<Update/>} />
      </Routes>


      </BrowserRouter>
  );
}

export default App;
