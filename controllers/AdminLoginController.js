const Admin = require('../models/admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find the user by email
    const admin = await Admin.findOne({ email });

    // Check if the user exists
    if (!admin) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (isPasswordValid) {
      // Create a JWT token
      const token = jwt.sign({ _id:admin._id, fname:admin.fname, email:admin.email}, 'ttourappp', { expiresIn: '1h' });

      // Send the token to the ReactJS frontend
      res.json({ token });

    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { adminlogin };
