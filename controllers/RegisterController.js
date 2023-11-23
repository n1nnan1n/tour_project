var User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async(req, res) => {
    try {
      const { fname, lname, email, password, birthdate, nationality, phone, food_allergy, special_req} = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already in use' });
      }
  
      const newUser = new User({ fname, lname, email, password, birthdate, nationality, phone, food_allergy, special_req});
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = { register };