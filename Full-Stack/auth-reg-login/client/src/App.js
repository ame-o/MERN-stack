import './App.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom"
import Dashboard from './views/Dashboard';
import Main from './views/Main';
import CreateEvent from './views/CreateEvent';
import Update from './views/UpdateEvent';
import DisplayOne from './views/DisplayOne';

function App() {


  return (
    <div className="App">
      <BrowserRouter>        

        <Switch>
          <Route path="/events/create">
            <CreateEvent/>
          </Route>
          <Route path="/events/view/:id">
            <DisplayOne/>
          </Route>
          <Route path="/events/edit/:id/">
            <Update />
          </Route>
          <Route path='/events'>
            <Dashboard />
          </Route>
          <Route path="/">
          <Main/>
          </Route>    

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;