const stripe = require('stripe')('sk_test_51OGNrcDiyx2jx89Ts9UoCQ87JXPWOvDSjTpkyV4uYitzwHhIPXI4HBBYt8ltEVwlF3sItOtR9y1jcmembbJRqbOD00putV2ZDT');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const cors = require("cors");

app.use(session({
  secret: 'ttourappp',
  resave: false,
  saveUninitialized: true,
}));
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://thanincwtnk:n1nnan1n@tourapp.kd7ljws.mongodb.net/tourapp?retryWrites=true&w=majority', {
  useNewUrlParser: true
});


global.loggedIn = null

const YOUR_DOMAIN = 'http://localhost:3000';
// const YOUR_DOMAIN = 'https://tour-project-git-toon-n1nnan1ns-projects.vercel.app';


const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');
const TourinfoController = require('./controllers/TourinfoController');
const SesController = require('./controllers/SesController');
const AdminCreate = require('./controllers/AdminCreate');
const AdminLogin = require('./controllers/AdminLoginController');
const OrderController = require('./controllers/OrderController');
const CreateCheckout = require('./controllers/CreateCheckout');
const SessionStatus = require('./controllers/SessionStatus');

const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleware = require('./middleware/authMiddleware')


app.use("*", (req, res, next) => {
  loggedIn = req.session.userId
  next()
})

app.post('/register',redirectIfAuth,RegisterController.register);
app.post('/login',redirectIfAuth,LoginController.login);
app.post('/admincreate',AdminCreate.admincreate);
app.post('/adminlogin',AdminLogin.adminlogin);
app.post('/ordercalculate',OrderController.placeOrder);

app.get('/tourinfo',TourinfoController.getAllTourInfo);
app.get('/tourinfo/:tourName',TourinfoController.getTourByName);
app.get('/tourinfoid/:tourId',TourinfoController.getTourById);
app.get('/home', authMiddleware, SesController);

app.post('/create-checkout-session',CreateCheckout.createCheckoutSession);
app.get('/session-status',SessionStatus.SessionStatus)

app.listen(3001, () => {
  console.log('Application is running on port 3001');
});