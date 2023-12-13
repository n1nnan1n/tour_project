var User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async(req, res) => {
  if (loggedIn) {
    res.redirect('/');
  }

    try {
      const { title, fname, lname, email, password, passport_no, passport_exp, birthdate, nationality, phone, food_allergy, special_req} = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already in use' });
      }
  
      const newUser = new User({ title, fname, lname, email, password, passport_no, passport_exp, birthdate, nationality, phone, food_allergy, special_req});
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = { register };