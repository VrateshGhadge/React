import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  //const [count, setCount] = useState(0)
 let [counter, setCounter] = useState(15)
//let counter = 15

  const addValue = ()=>{
    console.log("clicked", counter);
    counter = counter + 1
    setCounter(counter)
  }
  if(counter >20){
    setCounter(counter - 1)
  }

  const removeValue = ()=>{
    setCounter(counter - 1)
    
  }
  if(counter < 0){
    setCounter(counter + 1)
  }


  return (
    <>
      <h1>React with VRT</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value:{counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value:{counter}</button>
      <p>Footer:{counter}</p>
    </>
  )
}

export default App
