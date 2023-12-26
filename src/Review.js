import React, { Component } from 'react'
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import {  Typography, Grid ,Box} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from "react";

import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  
export default function Review() {
    
  const [tour, settour] = useState('');  
    const handleChange = (event) => {
      settour(event.target.value);
    };
    const drawerWidth = 240;
    const StyledRating = styled(Rating)(({ theme }) => ({
        '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
          color: theme.palette.action.disabled,
        },
      }));
      
      const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon color="error" />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon color="error" />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon color="warning" />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon color="success" />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon color="success" />,
          label: 'Very Satisfied',
        },
      };
      
      function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
      }
      
      IconContainer.propTypes = {
        value: PropTypes.number.isRequired,
      };
      
    return (
        <>
        <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }} >
           <Toolbar>
           <Typography variant="h6" noWrap component="div">
              Editor Review
                   </Typography>
                 </Toolbar>
              </AppBar>
              <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft:'20%',
        '& > :not(style)': {
          m: 1,
          width: '90%',
          height: 128,
        },
      }}
    >
    
      <Paper elevation={3} style={{padding:'10px',height:'100%'}} >
      <TextField
          id="outlined-multiline-flexible"
          label="Review title"
          multiline
          maxRows={4}
          style={{float:'left',width:'49%',marginBottom:'10px'}}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="User Name"
          multiline
          maxRows={4}
          style={{float:'right',width:'49%',marginBottom:'10px'}}
        />

   
      <FormControl fullWidth style={{width:'49%',float:'left'}}>
        <InputLabel id="demo-simple-select-label">Tour</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tour}
          label="Tour"
          onChange={handleChange}
        //   style={{marginBottom:'10px'}}
        >
              <MenuItem value={'Bangkok grand tour'}>Bangkok grand tour</MenuItem>
                <MenuItem value={'bangkok unseen tour'}>bangkok unseen tour</MenuItem>
                <MenuItem value={'bkk Instargram/Tiktok'}>bkk Instargram/Tiktok</MenuItem>
                <MenuItem value={'The ultimate of the floating market'}>The ultimate of the floating market</MenuItem>
                <MenuItem value={'Half day floating market'}>Half day floating market</MenuItem>
                <MenuItem value={'The sacred tattoo tour'}>The sacred tattoo tour</MenuItem>
                <MenuItem value={'Ayutthaya highlight tour'}>Ayutthaya highlight tour</MenuItem>
                <MenuItem value={'The scenic farm tour'}>The scenic farm tour</MenuItem>
                <MenuItem value={'Cooking class'}>Cooking class</MenuItem>
         
        </Select>
      </FormControl>
      {/* <Stack spacing={1} style={{float:'right'}}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      
    </Stack> */}
    
    <StyledRating
      name="highlight-selected-only"
    //   defaultValue={0}
      IconContainerComponent={IconContainer}
      getLabelText={(value) => customIcons[value].label}
      highlightSelectedOnly
      style={{marginTop:'15px',marginLeft:'20px',height:'42px'}}
    />
     <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          style={{float:'left',marginTop:'10px',width:'100%'}}
        />
        {/* <Paper elevation={3} style={{width:'49%',float:'right',marginTop:"10px",height:'100%',padding:'4%'}}>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
    </Paper> */}
    
<Button variant="outlined" color="error" style={{marginTop:'10px',marginRight:"10px",float:'left'}}>
 Cancle
</Button>
    <Button variant="contained" color="success" style={{marginTop:'10px',float:'right'}}>
 Done
</Button>
        </Paper>
    </Box>
     
      </>
    )
  }
