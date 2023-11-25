import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'
import Register from './Register'
import Home from './Home'
import Login from './Login'
import Footer from './Footer';

import Oneday from './Oneday';
import About from './About';
import Customized from './Customized';
import Daytrip from './Daytrip';
import Tour1 from './Tour1'

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
                
                <Route path="Oneday" element={<Oneday/>} />
                <Route path="About" element={<About/>} />
                <Route path="Customized" element={<Customized/>} />
                <Route path="Daytrip" element={<Daytrip/>} />
                <Route path="Tour1" element={<Tour1/>} />
              
            </Routes>
          </BrowserRouter>
          
          
        </div>
      );
}

export default App