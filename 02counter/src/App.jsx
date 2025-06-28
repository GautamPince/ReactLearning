import { useState } from 'react';
import './App.css'

function App() {
  useState

  let counter = 5;

  const addValue = () => {
    counter += 1;
    console.log("counter", counter);
  }
  return (
    <>
      <h1>Chai or react</h1>
      <h3>Counter Value : {counter}</h3>

      <button
        onClick={addValue}
      >Add Value</button>
      <br />
      <button>Subtract Value</button>

    </>
  )
}

export default App
