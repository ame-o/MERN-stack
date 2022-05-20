import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>Favorite Authors</h1>
    
        <Routes>
          <Route path='' element={ <Main /> } />
          <Route path='/new' element={ <CreateForm /> } />
          <Route path='/:id' element={ <Detail /> } />
          <Route path='/:id/edit' element={ <Update /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
