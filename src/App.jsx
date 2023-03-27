import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from "react-router-dom";
import Main from './components/Main'
import Login from './components/Login';

function App() {
 
  return (
  
  <Routes>
<Route path="/" element={ <Login/>}/>
<Route path="/Main" element={ <Main/>}/>
  </Routes>
  
  
    //   <div className="App">
  // <Main/>
  
  //   </div>
  )
}

export default App
