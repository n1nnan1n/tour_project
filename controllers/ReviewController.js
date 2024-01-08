const Review = require('../models/review');
const Tour = require('../models/tour');
const Admin = require('../models/admin');
const upload = require('../middleware/upload');

const postReview = async (req, res) => { 
    const admin_id = "65700e79b8c88291793fbf9c";

      try {
        const { reviewtitle, user_name, tour_name, rating, comment } = JSON.parse(req.body.reviewDetail);
        const image = req.file;
        const admin = await Admin.findById(admin_id);
        if (!admin) {
            return res.status(401).json({ error: 'Invalid admin' });
          }
    
          const newReview = new Review({
            reviewtitle,
            user_name,
            tour_name,
            rating,
            comment,
            image: { data: image.buffer, contentType: image.mimetype },
          });
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
  
  const getTourReviewByName = async (req, res) => {
    const { tourName } = req.params;

    try {
      const reviews = await Review.find({ tour_name: tourName });
      const tour = await Tour.findOne({ tour_name: tourName });
  
      if (!reviews || reviews.length === 0) {
        return res.status(404).json({ error: 'Reviews not found' });
      }
  
      if (!tour) {
        return res.status(404).json({ error: 'Tour not found' });
      }
  
      // Assuming tour_image is a field in your Tour model
      const tourImage = tour.tour_image[0];
  
      // Sending both reviews and tour_image in the response
      res.json({ reviews, tourImage });
    } catch (error) {
      console.error('Error fetching tour:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = { postReview,getAllTourReviewCover,getTourReviewByName};