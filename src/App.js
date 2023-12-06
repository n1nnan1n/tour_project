import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlogin from './Adlogin';
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
        <Routes>
          <Route path="/" element={<Adlogin />} />
          <Route
            path="/AdHome"
            element={
              <>
                <Sidebar />
                <AdHome />
              </>
            }
          />
          <Route
            path="/Booking"
            element={
              <>
                <Sidebar />
                <Booking />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
