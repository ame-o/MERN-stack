import './App.css';
import React, {useState} from "react";
import UserForm from './components/UserForm';
import DisplayForm from './components/DisplayForm';

function App() {
  const [user,setUser] = useState()
  const newUser = (u) => {
    setUser(u)
  }
  console.log(user);
  return (
    <div className="App">
      <UserForm newUser = {newUser}/>
      {user && 
      <DisplayForm user={user}/>
      }
    </div>
  );
}

export default App;
