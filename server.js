const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://thanincwtnk:n1nnan1n@tourapp.kd7ljws.mongodb.net/tourapp?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');
const TourinfoController = require('./controllers/TourinfoController');

app.post('/register',RegisterController.register);
app.post('/login',LoginController.login);
app.get('/tourinfo',TourinfoController.getAllTourInfo);
app.get('/tourinfo/:tourName',TourinfoController.getTourByName);

app.listen(3000, () => {
  console.log('Application is running on port 3000');
});