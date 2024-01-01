const Tour = require('../models/tour');
const calendar = require('../models/calendar');
var User = require('../models/user');
const Admin = require('../models/admin');

const disableDate = async (req, res) =>{  
  const { admin_id,tour_date } = req.body;

    try {
     const admin = await Admin.findById(admin_id);

    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin' });
    }

      // Validate the input
      if (!tour_date) 
        {
        return res.status(400).json({ error: 'Invalid input data' });
        }
    
      try {
      // Check if the tour_date already exists in the database
      const existingDate = await calendar.findOne({ closed_date: tour_date });
      
      if (existingDate) {
        return res.status(400).json({ error: 'Date already exists in the database' });
      }

        await calendar.create({ closed_date:tour_date,date_status:'close' });
    
        res.status(201).json({ message: 'Date added successfully' });
      } catch (error) {
        console.error('Error adding date:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteDate = async (req, res) => {
  const { admin_id, tour_date } = req.body;

  try {
    const admin = await Admin.findById(admin_id);

    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin' });
    }

    // Validate the input
    if (!tour_date) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    try {
      // Check if the tour_date exists in the database
      const existingDate = await calendar.findOne({ closed_date: tour_date });

      if (!existingDate) {
        return res.status(404).json({ error: 'Date not found in the database' });
      }

      // If the date exists, delete it
      await calendar.findOneAndDelete({ closed_date: tour_date });

      res.status(200).json({ message: 'Date deleted successfully' });
    } catch (error) {
      console.error('Error deleting date:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCloseDates = async (req, res) =>{
      try {
        const allDates = await calendar.find();
        res.json(allDates);
      } catch (error) {
        console.error('Error fetching dates:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }

module.exports = { disableDate,deleteDate,getCloseDates };
