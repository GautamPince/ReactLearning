// import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {

  return (
    <>

      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>Tailwind Test</h1>


      <Card username="chaiaurcode" btnText='follow' />
      <Card username="gauatam" />
      <Card username='prince' btnText='Know more' />
      {/* <h4 onClick={increment}>count : {count}</h4> */}
    </>
  )
}

export default App
