import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import MailIcon from '@mui/icons-material/Mail';
import Booking from './Booking';
import AdHome from './AdHome';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from 'react-bootstrap/Button';

const drawerWidth = 240;
export default function Sidebar() {

      return (
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
          >
            
            <Toolbar />

            </Drawer>
            <Drawer variant="permanent" anchor="left">
      <Box sx={{ width: drawerWidth }}>
        <List>
          {[
            { text: 'Home', icon: <HomeIcon />, path: '/' },
            { text: 'Booking', icon: <EditCalendarIcon />, path: '/booking' },
            // เพิ่มรายการเมนูอื่น ๆ ตามต้องการ
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button variant="primary" > { <LogoutIcon />}  Logout </Button>
        
      </Box>
    </Drawer>
          </Box>
       
      );
    }
