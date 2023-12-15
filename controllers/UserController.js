const User = require('../models/user');

const userProfile = async (req, res) => {
    try {
        if (loggedIn) {
          res.send('You loggedIn');
          return;
        }
      const { userID } = req.params;
    
      // Validate the input
      if (!userID) {
        return res.status(400).json({ error: 'Invalid input data' });
      }
    
      const selectedUser = await User.findById({_id:userID});
      
      if (selectedUser) {
        res.json(selectedUser)
      } else {
        // No order found with the specified criteria
        console.log('User not found');
      }
    }
     catch (error) {
      console.error('Error fetching order data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    };
    }
  
  module.exports = { userProfile };
  