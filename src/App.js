import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlogin from './Adlogin';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';
import AdHome from './AdHome';
import Sidebar from './Sidebar';
import Booking from './Booking';
import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';

import './App.css';
import Orders from './pages/Orders/index'


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
       <SideBar menu={sidebar_menu} />
        <Routes>
          <Route path="/" element={<Adlogin />} />
          <Route exact path="AdHome" element={< AdHome/>} />
                  <Route exact path="Orders" element={<Orders/>} />
                  <Route exact path="/profile" element={<div></div>} />
          <Route
            path="/AdHome"
            element={
              <>
             
                {/* <Sidebar /> */}
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
    // <Route>
    //   <div className='dashboard-container'>
    //     <SideBar menu={sidebar_menu} />
          
    //       <div className='dashboard-body'>
    //           <Routes>
                 
    //               <Route path="/" element={<Adlogin />} />
             
    //               {/* <Route exact path="Orders" element={< Orders/>} /> */}
    //               <Route exact path="Locations" element={<div></div>} />
    //               <Route exact path="Profile" element={<div></div>} />
    //           </Routes>
    //       </div>
    //   </div>
    // </Route>
  );
}
export default App;