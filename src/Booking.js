import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Calendar } from "react-calendar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import 'react-calendar/dist/Calendar.css';

const drawerWidth = 240;
function Booking() {
  const [meetings, setMeetings] = useState([]);

 
  return (
    <>
    <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
            <Toolbar>
              <Typography variant="h6" noWrap component="div">
              Booking
              </Typography>
            </Toolbar>
          </AppBar>
        
    <div>
      <h1>Meetings</h1>
      <Calendar
      className="custom-calendar"
        onChange={(date) => {
          setMeetings([...meetings, date]);
        }}
      />
      
      {/* <ul>
        {meetings.map((meeting, index) => (
  <li key={index}>{meeting.toLocaleDateString('en-US')}</li>
))}

      </ul> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550,marginLeft:'250px' }} className="custom-table" aria-label="simple table">
     
 

        <TableHead>
          <TableRow>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Tour</TableCell>
            <TableCell align="center">Price</TableCell>
          </TableRow>
        </TableHead>
       
        <TableBody>
          {meetings.map((meeting, index) => (
             <TableRow className={index % 2 === 0 ? 'even-row' : 'odd-row'}
            //  key={index}
            //  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             
              {/* <TableCell component="th" scope="row">
        {`Meeting ${index + 1}`}
      </TableCell> */}
       
              <TableCell align="center"><li key={index}>{meeting.toLocaleDateString('en-US')}</li></TableCell>
              {/* <TableCell align="right">{index}</TableCell>
              <TableCell align="right">{index}</TableCell>
              <TableCell align="right">{index}</TableCell> */}
            </TableRow>
          ))}
        </TableBody> 
      </Table>
    </TableContainer>
    </div>
 


    </>
  )
}

export default Booking