import AnalyticEcommerce from './components/cards/statistics/AnalyticEcommerce';
import React, { useState } from 'react';
import { AppBar, Typography, Grid } from '@mui/material';
import MainCard from './components/MainCard';
import OrdersTable from './pages/dashboard/OrdersTable';
import Toolbar from '@mui/material/Toolbar';
const drawerWidth = 240;

function AdHome() {
  const [slot, setSlot] = useState('week');

  return (
    <>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }} >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      

      <Grid container rowSpacing={3.5} columnSpacing={2.75} style={{marginLeft:'250px',maxWidth:'',width:"150vh"}}>
      
      {/* row 1 */}
      {/* <Grid item xs={9} >
        <Typography variant="h5">Dashboard</Typography>
      </Grid> */}
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Page Views" count="4,42,236" percentage={59.3} extra="35,000" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Users" count="78,250" percentage={70.5} extra="8,900" />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce title="Total Order" count="18,800" percentage={27.4} isLoss color="warning" extra="1,943" />
      </Grid>
     

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

        {/* row 3 */}
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h4">Recent Orders</Typography>
            </Grid>
            <Grid item />
          </Grid>
          <MainCard sx={{ mt: 2 }} content={false}>
            <OrdersTable />
          </MainCard>
        </Grid>
      </Grid>
    </>
  );
}

export default AdHome;
