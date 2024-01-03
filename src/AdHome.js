import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { AppBar, Typography, Grid } from '@mui/material';
import MainCard from './components/MainCard';
import OrdersTable from './pages/dashboard/OrdersTable';
import Toolbar from '@mui/material/Toolbar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

export default function AdHome() {

const drawerWidth = 240;
const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'nametour', label: 'Nametour', minWidth: 170 },
  { id: 'person', label: 'Person', minWidth: 170 },
  { id: 'tourdate', label: 'tourdate', minWidth: 170 },
  { id: 'price', label: 'price', minWidth: 170 },
  { id: 'order_date', label: 'order_date', minWidth: 170 },
];

const [rows, setRows] = useState([]);

useEffect(() => {
  const admin_id = '65700e79b8c88291793fbf9c';

  // axios.post('http://localhost:3001/allorder',{admin_id})
  axios.post('https://tourapi-hazf.onrender.com/allorder',{admin_id})
    .then((response) => {
      console.log(response.data); // Log the entire response object
      const orders = response.data.orders; // Update this line based on the actual structure
      console.log(orders);

      // Map the orders to the format expected by createData and set it in the state
      const formattedRows = orders.map(order => createData(
        order.user_firstname,
        order.tour_name,
        order.quantity,
        dayjs(order.tour_date).format('DD / MM / YYYY'),
        order.total_price,
        dayjs(order.createdAt).format('DD / MM / YYYY')
      ));

      setRows(formattedRows);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}, []);

function createData(name, nametour,person,tourdate,price,order_date) {
  // const density = population / size;
  return { name, nametour, person,tourdate, price, order_date };
}

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   // createData('China', 'CN', 1403500365, 9596961),
//   // createData('Italy', 'IT', 60483973, 301340),
//   // createData('United States', 'US', 327167434, 9833520),
//   // createData('Canada', 'CA', 37602103, 9984670),
//   // createData('Australia', 'AU', 25475400, 7692024),
//   // createData('Germany', 'DE', 83019200, 357578),
//   // createData('Ireland', 'IE', 4857000, 70273),
//   // createData('Mexico', 'MX', 126577691, 1972550),
//   // createData('Japan', 'JP', 126317000, 377973),
//   // createData('France', 'FR', 67022000, 640679),
//   // createData('United Kingdom', 'GB', 67545757, 242495),
//   // createData('Russia', 'RU', 146793744, 17098246),
//   // createData('Nigeria', 'NG', 200962417, 923768),
//   // createData('Brazil', 'BR', 210147125, 8515767),
// ];



  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }} >
       <Toolbar>
       <Typography variant="h6" noWrap component="div">
          Home
               </Typography>
             </Toolbar>
          </AppBar>
         
    <Paper sx={{ width: '80%', overflow: 'hidden' ,marginLeft:'18%'}}> <h1>Order</h1>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </>
  );
}


