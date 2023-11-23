const Tour = require('../models/Tour');

const getAllTourInfo = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
const getTourByName = async (req, res) => {
  const { tourName } = req.params;

  try {
    // Using findOne to find a tour by its name
    // const tour = await Tour.findOne({ tour_name: { $regex: new RegExp(tourName, 'i') } });
    const tour = await Tour.findOne({ tour_name: tourName });

    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }

    res.json(tour);
  } catch (error) {
    console.error('Error fetching tour:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports = { getAllTourInfo , getTourByName};