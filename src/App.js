import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Register from './Register'
import Home from './Home'
import Login from './Login'

function App() {
  return (
        <div className="App">
          <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Register" element={<Register/>} />
                <Route path="Login" element={<Login/>} />
              
            </Routes>
          </BrowserRouter>
          
          
        </div>
      );
}

export default App