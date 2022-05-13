import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link 
} from "react-router-dom";
import Keyword from "./components/Keyword"
import Number from "./components/Number"

function App(){

  const Home = () => {
    return (
    <h1 style={{color: "red"}}> Welcome </h1>
  );
}
    
const Hello = () => {
  return (
    <h1 style={{color: "blue"}}>Hello</h1>
  );
}
    
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      {/* <p>
        <Link to="/">Home</Link>
          | 
        <Link to="/4">/4</Link> 
          |
        <Link to="/hello"> Hello </Link>  
      </p> */}
      <Routes>

      <Route path="/home" element ={<Home />} />
      <Route path="/:number" element={<Number />}/>
      <Route path="/hello/:keyword/:colorParam" element={<Keyword />}/>

      </Routes>
    </BrowserRouter>
  );
}


export default App;
