import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlogin from './Adlogin';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';


function App() {
  return (
        <div className="App">
          <BrowserRouter>
          {/* <NavbarComponent fixed="top" /> */}
            <Routes>
                <Route path="/" element={<Adlogin/>}/>
                
            </Routes>
          </BrowserRouter>
          
          
        </div>
      );
}

export default App