const jwt = require('jsonwebtoken');

const protect = async(req, res) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
  
      res.json({ message: 'You have access to the protected route!', user: decoded });
    });
  };
  
module.exports = { protect };