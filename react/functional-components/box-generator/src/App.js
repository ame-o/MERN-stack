import './App.css';
import DisplayBox from './components/DisplayBox';
import FormBox from './components/FormBox';
import React, {useState} from "react";
function App() {
  //making multiple boxes so we can use an array
  const[boxes,setBoxes] = useState([]);

  //function that adds boxes
  const addBox = (newBox) => {
    setBoxes([...boxes,newBox])
  }
  return (
    <div className="App">
      <FormBox addBox={addBox}/>
      <DisplayBox allBoxes={boxes}/>
    </div>
  );
}

export default App;
