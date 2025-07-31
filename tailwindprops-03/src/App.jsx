import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p4 rounded-xl mb-4'>Tailwind</h1>
      <Card username={"Vratesh"} price= "599" colorPart= "999"/>
      <Card username={"Yash"}  colorPart = "678"/>
        
    </>
  )
}

export default App
