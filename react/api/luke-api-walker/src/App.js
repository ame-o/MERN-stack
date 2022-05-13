import './App.css';
import SWForm from './components/SWForm';
import People from './views/People';
import Planets from './views/Planets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
    <h1> Star Wars API </h1>
    <SWForm/>
    <Routes>
      <Route path = "/people/:id" element={<People/>} />
      <Route path = "/planets/:id" element={<Planets/>} />
    </Routes>
</BrowserRouter>
  );
}

export default App;
