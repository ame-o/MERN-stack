import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import ProductsForm from './components/ProductsForm';
import DisplayAll from './components/DisplayAll';
import ShowOne from './views/ShowOne';
import Update from './views/Update';
import Main from './views/Main';

function App() {
  
  return (
    <BrowserRouter>
    
    <h1> Hello There </h1>>
    <Link to="/products">| DisplayAll</Link>
    <Link to="/products/new">| Create Product | </Link>
    

      <Routes>
          <Route path= "" element = {<Main/>} />
          <Route path= "/products" element = {<Main/>} />
          <Route path= "/products/new" element ={<ProductsForm/>} />
          <Route path= "/products/:id" element ={<ShowOne/>} />
          <Route path= "/products/:id/edit" element ={<Update/>} />
      </Routes>


      </BrowserRouter>
  );
}

export default App;
