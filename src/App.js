
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlogin from './Adlogin';
import AdHome from './AdHome';
import Sidebar from './Sidebar';
import Booking from './Booking';
import Review from './Review';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='dashboard-container'>
          <Sidebar menu={sidebar_menu} />
          <div className='dashboard-body'>
            <Routes>
              <Route path="/" element={<Adlogin />} />
              <Route path="/AdHome" element={<AdHome />} />
              <Route path="Booking" element={<Booking />} />
              <Route path="Review" element={<Review />} />
              {/* <Route path="/" element={<div></div>} /> */}
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
