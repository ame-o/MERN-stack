import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Registration from './views/Registration';
import DisplayUsers from './views/DisplayUsers';
import Login from './views/Login';
import Cookies from './views/Cookies';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Test Cookies</Link>
        <Link to="/registration">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">All users</Link>
        


        <Routes>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/login"  element={ <Login />}/>
          <Route path="/users" element={ <DisplayUsers />}/>       
          <Route path="/"  element={<Cookies />}/>    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;