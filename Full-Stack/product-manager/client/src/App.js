import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductsForm from './components/ProductsForm';
import Dashboard from './views/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <h1> Testing... </h1>
    <Link to="/products">| Dashboard</Link>
    <Link to="/products/new">| Create Product | </Link>
      <Routes>
          <Route path= "/products" element = {<Dashboard/>} />
          <Route path= "/products/new" element = {<ProductsForm/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
