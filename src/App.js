import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Register from './Register'
import Home from './Home'

function App() {
  return (
        <div className="App">
          <BrowserRouter>
          <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Register" element={<Register/>} />
              
            </Routes>
          </BrowserRouter>
          
          
        </div>
      );
}

export default App