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
import axios from 'axios';

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
  const [reviewDetail, setReviewDetail] = useState({
    reviewtitle: '',
    user_name: '',
    tour_id: '',
    rating: '',
    comment: ''
  });

  console.log(reviewDetail)

  const handleChange = (event) => {
    const { name, value } = event.target;
    // settour(value);
    setReviewDetail((prevReviewDetail) => ({
      ...prevReviewDetail,
      [name]: value,
    }));
  };

  const handleTourChange = (event) => {
    const { name, value } = event.target;
    settour(value);
    setReviewDetail((prevReviewDetail) => ({
      ...prevReviewDetail,
      [name]: value,
    }));
  };
  


    const handleReviewSubmit = async () => {
      if (
        reviewDetail.reviewtitle.trim() === '' ||
        reviewDetail.user_name.trim() === '' ||
        reviewDetail.tour_id.trim() === '' ||
        reviewDetail.comment.trim() === ''
      ) {
        // Display an error message or handle the validation as needed
        alert('Please fill in all required fields.');
        return;
      }

      
      try {
        // Assuming you have a server running at http://localhost:3001
        // const response = await axios.post('http://localhost:3001/postreview', reviewDetail);
        const response = await axios.post('https://tourapi-hazf.onrender.com/postreview', reviewDetail);
        console.log(response.data); // Handle the server response as needed
      } catch (error) {
        console.error('Error submitting review:', error);
      }
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
          <AppBar position="fixed" sx={{ width: `calc(100% - 240px)`, ml: '240px' }}>
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
              marginLeft: '20%',
              '& > :not(style)': {
                m: 1,
                width: '90%',
                height: 128,
              },
            }}
          >
            <Paper elevation={3} style={{ padding: '10px', height: '100%' }}>
              <TextField
                name="reviewtitle"
                label="Review title"
                multiline
                maxRows={4}
                style={{ float: 'left', width: '49%', marginBottom: '10px' }}
                onChange={handleChange}
                required
              />
              <TextField
                name="user_name"
                label="User Name"
                multiline
                maxRows={4}
                style={{ float: 'right', width: '49%', marginBottom: '10px' }}
                onChange={handleChange}
                required
              />
    
              <FormControl fullWidth style={{ width: '49%', float: 'left' }}>
                  <InputLabel id="demo-simple-select-label">Tour</InputLabel>
                  <Select
                    name="tour_id"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={tour}
                    label="Tour"
                    onChange={handleTourChange}
                    required
                  >
                    <MenuItem value={'655a2fae9b4c465647c4609a'}>Bangkok grand tour</MenuItem>
                    <MenuItem value={'655e1317a5dd819be5edeb6d'}>Bangkok unseen tour</MenuItem>
                    <MenuItem value={'655e1533a5dd819be5edeb6e'}>BKK Instagram/TikTok</MenuItem>
                    <MenuItem value={'655ee85bdc69725f99120b84'}>The ultimate of the floating market</MenuItem>
                    <MenuItem value={'655ee996dc69725f99120b85'}>Half day floating market</MenuItem>
                    <MenuItem value={'655eee2fdc69725f99120b86'}>The sacred tattoo tour</MenuItem>
                    <MenuItem value={'655eef3adc69725f99120b87'}>Ayutthaya highlight tour</MenuItem>
                    <MenuItem value={'655ef143dc69725f99120b88'}>The scenic farm tour</MenuItem>
                    <MenuItem value={'655ef329dc69725f99120b89'}>Cooking class</MenuItem>
                  </Select>
                </FormControl>
              <Stack spacing={1} style={{ float: 'left', margin: '15px' }}>
                <Rating name="rating" precision={0.5} onChange={(event, value) => handleChange({ target: { name: 'rating', value } })} />
              </Stack>
              <TextField
                name="comment"
                label="Review Detail"
                multiline
                rows={4}
                style={{ float: 'left', marginTop: '10px', width: '100%' }}
                onChange={handleChange}
                required
              />
    
              <Button variant="outlined" color="error" style={{ marginTop: '10px', marginRight: '10px', float: 'left' }}>
                Cancel
              </Button>
              <Button variant="contained" color="success" style={{ marginTop: '10px', float: 'right' }} onClick={handleReviewSubmit}>
                Done
              </Button>
            </Paper>
          </Box>
        </>
      );
    };
