// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Adlogin from './Adlogin';
// import './index.css';
// import "bootstrap/dist/css/bootstrap.min.css";
// import reportWebVitals from './reportWebVitals';
// import AdHome from './AdHome';
// import Sidebar from './Sidebar';
// import Booking from './Booking';
// import SideBar from './components/Sidebar';
// import sidebar_menu from './constants/sidebar-menu';

// import './App.css';
// import Orders from './pages/Orders/index'


// function App() {
//   return (
    
//     <div className="App">
//       <BrowserRouter> 

//         <Route>
//         <div className='dashboard-container'>
//         <SideBar menu={sidebar_menu} />
          
//           <div className='dashboard-body'>
//               <Route>
//               <Route path="/" element={<Adlogin />} />
//           <Route exact path="AdHome" element={< AdHome/>} />
//                   <Route exact path="Orders" element={<Orders/>} />
//                   <Route exact path="/profile" element={<div></div>} />
//                   <Route exact path="Booking" element={<Booking/>} />
//               </Route>
//           </div>
//       </div>
//           {/* <Route path="/" element={<Adlogin />} />
//           <Route exact path="AdHome" element={< AdHome/>} />
//                   <Route exact path="Orders" element={<Orders/>} />
//                   <Route exact path="/profile" element={<div></div>} />
//                   <Route exact path="Booking" element={<Booking/>} /> */}
//           <Route
//             path="/AdHome"
//             element={
//               <>
             
//                 {/* <Sidebar /> */}
//                 <AdHome />
//               </>
//             }
//           />
//           <Route
//             path="/Booking"
//             element={
//               <>
//                 <Sidebar />
//                 <Booking />
//               </>
//             }
//           />
//         </Route>
//       </BrowserRouter>
//     </div>
//     // <Route>
//     //   <div className='dashboard-container'>
//     //     <SideBar menu={sidebar_menu} />
          
//     //       <div className='dashboard-body'>
//     //           <Routes>
                 
//     //               <Route path="/" element={<Adlogin />} />
             
//     //               {/* <Route exact path="Orders" element={< Orders/>} /> */}
//     //               <Route exact path="Locations" element={<div></div>} />
//     //               <Route exact path="Profile" element={<div></div>} />
//     //           </Routes>
//     //       </div>
//     //   </div>
//     // </Route>
//   );
// }
// export default App;
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Adlogin from './Adlogin';
import AdHome from './AdHome';
import Sidebar from './Sidebar';
import Booking from './Booking';
import Orders from './pages/Orders/index';
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
              <Route path="Orders" element={<Orders />} />
              <Route path="/" element={<div></div>} />
              {/* Add other routes as needed */}
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
