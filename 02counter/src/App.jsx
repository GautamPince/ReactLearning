import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  // let counter = 5;

  const addValue = () => {
    if (counter >= 20) {
      alert("Counter value cannot be greater than 20");
      return;
    }
    setCounter(counter + 1);
  }
  const removeValue = () => {
    if (counter <= 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    console.log("counter", counter);
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Chai or react</h1>
      <h3>Counter Value : {counter}</h3>

      <button
        onClick={addValue}
      >Add Value : {counter}</button>
      <br />
      <button onClick={removeValue}>Subtract Value : {counter}</button>
      <p>Footer :  {counter} withs love</p>

    </>
  )
}

export default App
