const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  if (loggedIn) {
    res.redirect('/');
  }

  try {
    const { email, password } = req.body;
    const JWT_SECRET = process.env.JWT_SECRET || 'ttourappp';

    // Check if the email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    User.findOne({ email }).then((user) => {
      console.log(user);
      if (user) {
        let cmp = bcrypt.compare(password, user.password).then((match) => {
          if (match) {
            req.session.userId = user._id;
            console.log(req.session.userId)
            const token = jwt.sign({ _id: user._id, fname: user.fname, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            res.json({ token });
          } else {
            console.log(user._id, email, password);
            res.status(401).json({ error: 'Invalid email or password' });
          }
        });
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { login };
