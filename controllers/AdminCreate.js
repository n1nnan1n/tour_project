var Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const admincreate = async(req, res) => {
    try {
      const { fname, lname, email, password, phone } = req.body;

      const newAdmin = new Admin({ fname, lname, email, password, phone});
      await newAdmin.save();
  
      res.status(201).json({ message: 'Admin create successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
module.exports = { admincreate };