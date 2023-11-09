import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Footer from './Footer';

function App() {
  return (
        <div className="App">
          <BrowserRouter>
          <Navbar fixed="top" />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Register" element={<Register/>} />
                <Route path="Login" element={<Login/>} />
                <Route path="Footer" element={<Footer/>} />
             
            </Routes>
          </BrowserRouter>
          
          
        </div>
      );
}

export default App