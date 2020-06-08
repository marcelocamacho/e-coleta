import React, {useState} from 'react';
import './App.css';
import Header from './Header';

function App() {

  const [counter,setCounter] = useState(1);

  function handleButtonClick(){
    setCounter(counter+1);
    console.log(counter)
  }
  return (
    <div>
      <Header title="Hello Word"  ></Header>
      <h1> {counter} </h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
        
     
  );
}

export default App;
