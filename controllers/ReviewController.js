const Review = require('../models/review');
const Tour = require('../models/tour');
const Admin = require('../models/admin');

const postReview = async (req, res) => { 
    const admin_id = "65700e79b8c88291793fbf9c";      
    const { user_name, tour_id, rating, comment} = req.body;

    if (loggedIn) {
      res.redirect('/');
    }
  
      try {
        const admin = await Admin.findById(admin_id);
        if (!admin) {
            return res.status(401).json({ error: 'Invalid admin' });
          }
    
        const newReview = new Review({user_name, tour_id, rating, comment});
        await newReview.save();
    
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    };

const getAllTourReviewCover = async (req, res) => {
    try {
      const tours = await Tour.find();
      res.json(tours);
    } catch (error) {
      console.error('Error fetching items:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  const getTourReviewById = async (req, res) => {
    const { tour_id } = req.params;
  
    try {
      const tour = await Review.findOne({ _id: tour_id });
  
      if (!tour) {
        return res.status(404).json({ error: 'Tour not found' });
      }
  
      res.json(tour);
    } catch (error) {
      console.error('Error fetching tour:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = { postReview,getAllTourReviewCover,getTourReviewById};