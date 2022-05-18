import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductsForm from './components/ProductsForm';
import Dashboard from './views/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <h1> Testing </h1>
    <Link to="/api/test"> Test Backend </Link>
    <Link to="/products">| Dashboard</Link>
      <Routes>
          <Route path ="/api/test" element = {<ProductsForm/>} />
          <Route path= "/products" element = {<Dashboard/>} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
