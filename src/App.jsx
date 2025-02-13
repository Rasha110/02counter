
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//function App() {
  //let[counter,setCounter]=useState(15)

 // let counter=35
  //const addValue=()=>{
    
    //  setCounter(counter+1)
      //console.log("value added",counter);}
    //const removeValue=()=>{
      //setCounter(counter-1)
    //}   
    import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(15); // Initialize state here

  const increment = () => {
    if (counter + 1 > 20) {
      alert("Limit exceeded");
    } else {
      setCounter(counter + 1);
      console.log("Incremented value:", counter + 1);
    }
  };

  const decrement = () => {
    if (counter - 1 < 0) {
      alert("Value cannot be negative");
    } else {
      setCounter(counter - 1);
      console.log("Decremented value:", counter - 1);
    }
  };

  return (
    <>
      <h1>Its 11:38 PM</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increment}>Add Value</button>
      <br /><br />
      <button onClick={decrement}>Remove Value</button>
    </>
  );
}

export default App;
