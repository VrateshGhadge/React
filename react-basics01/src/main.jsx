import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './App.jsx'

const anotherUser = "Attached code"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click here to visit google',
  anotherUser
) 

 
createRoot(document.getElementById('root')).render(
  
    reactElement
    
  
)
