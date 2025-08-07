import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Router, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github from './components/Github/Github.jsx';

// const router =createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       }, 
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Router path ='/' element={<Layout/>}>
    <Router path='' element={<Home/>} />
    <Router path='about' element={<About/>} />
    <Router path='contact' element={<Contact/>} />
    <Router path='user/:userid' element={<Contact/>} />
    <Router path='github' element={<Github/>} />
  </Router>
))


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
