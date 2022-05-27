import './App.css';
import React,{useState} from 'react';
import 'bulma/css/bulma.css';
// import {AppContext } from "./contextLib"


import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Dashboard from './views/Dashboard';
import Main from './views/Main';
import CreateEvent from './views/CreateEvent';
import UpdateEvent from './views/UpdateEvent';
import DisplayEvent from './views/DisplayEvent'
import DisplayEvents from './views/DisplayEvents'



function App() {
// const [loggedUser, setLoggedUser] = useState(JSON.parse(localStorage.getItem("loggedUser")));

  return (
    <div className="App">
      {/* <AppContext.Provider value ={{loggedUser,setLoggedUser}}> */}
      <BrowserRouter>        
        <Switch>
        <Route path="/users/allUsers">
            <Main/>
          </Route>
          <Route path="/events/create">
            <CreateEvent/>
          </Route>
          <Route path="/events/viewAll/">
            <DisplayEvents/>
          </Route>
          <Route path="/events/view/:id">
            <DisplayEvent/>
          </Route>
          <Route path="/events/edit/:id">
            <UpdateEvent />
          </Route>
          <Route path='/events'>
            <Dashboard />
          </Route>
          <Route path="/">
          <Main/>
          </Route>    
        </Switch>

      </BrowserRouter>
      {/* </AppContext.Provider> */}
    </div>
  );
}

export default App;