import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlogin from './Adlogin';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import AdHome from './AdHome';
import Sidebar from './Sidebar';
import Booking from './Booking';

function App() {
  return (
        <div className="App">
          <BrowserRouter>
          <Sidebar/>
            <Routes>
            <Route path="/" element={<AdHome/>}/>
                <Route path="Adlogin" element={<Adlogin/>}/>
                <Route path="Booking" element={<Booking/>}/>
                
            </Routes>
          </BrowserRouter>
          
          
        </div>
      );
}

export default App