import React, { useState,useEffect } from "react";
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
import { Grid } from '@mui/material';
import axios from "axios";
import { Switch, FormControlLabel } from '@mui/material';
const drawerWidth = 240;

function Booking() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAddMode, setAddMode] = useState(false);
  const [meetings, setMeetings] = useState([]);
  console.log(selectedDate)

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleToggleChange = () => {
    setAddMode(!isAddMode);
  };

   const performAction = async () => {
    if (selectedDate) {
      try {
        if (isAddMode) {
          console.log("close")
          await axios.post('YOUR_API_ENDPOINT_TO_ADD_MEETING', {
            closed_date: selectedDate.toISOString()
          });
          
        } else {
          console.log("open")
          await axios.delete('YOUR_API_ENDPOINT_TO_DELETE_MEETING', {
            tour_date: { date: selectedDate.toISOString() },
          });
          
        }

        // Fetch updated meetings after action
        fetchMeetings();
      } catch (error) {
        console.error(`Error ${isAddMode ? 'adding' : 'deleting'} meeting:`, error);
      }
    }
  };

  const fetchMeetings = async () => {
    try {
      const response = await axios.get('https://tourapi-hazf.onrender.com/getclosedates');
      setMeetings(response.data);
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  };

  useEffect(() => {
    fetchMeetings();
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Calendar
          </Typography>
        </Toolbar>
      </AppBar>

      <div className="margin">
        <h1 style={{ marginLeft: '5%' }}>Meetings</h1>
        <Calendar
          className="custom-calendar"
          onChange={handleDateChange}
          value={selectedDate}
        />
      </div>
      {selectedDate && (
        <div style={{ marginLeft: '250px', marginTop: '20px' }}>
          <Typography variant="body2">
            Selected Date: {selectedDate.toLocaleDateString('en-US')}
          </Typography>
        </div>
      )}
      <div style={{ marginTop: '20px' }}>
          <FormControlLabel
            control={
              <Switch
                checked={isAddMode}
                onChange={handleToggleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                style={{ color: isAddMode ? 'red' : undefined }}
              />
            }
            label={isAddMode ? 'Close' : 'Open'}
            style={{ color: isAddMode ? 'red' : undefined }}
          />
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 70, marginLeft: '250px' }} className="custom-table" aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Tour</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedDate && (
              <TableRow>
                <TableCell align="center">
                  {selectedDate.toLocaleDateString('en-US')}
                </TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Tour</TableCell>
                <TableCell align="center">Price</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* <div style={{ marginLeft: '250px', marginTop: '20px' }}>
        <Switch
          checked={isAddMode}
          onChange={handleToggleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography variant="body2">
          {isAddMode ? 'Add Mode' : 'Delete Mode'}
        </Typography>
      </div> */}
    </>
  );
}

export default Booking;