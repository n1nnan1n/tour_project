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

// const YOUR_DOMAIN = 'http://localhost:3000';
// const YOUR_DOMAIN = 'https://tourapi-hazf.onrender.com';


const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController');
const TourinfoController = require('./controllers/TourinfoController');
const SesController = require('./controllers/SesController');
const AdminCreate = require('./controllers/AdminCreate');
const AdminLogin = require('./controllers/AdminLoginController');
const OrderController = require('./controllers/OrderController');
const CreateCheckout = require('./controllers/CreateCheckout');
const SessionStatus = require('./controllers/SessionStatus');
const logoutController = require('./controllers/LogoutController');
const userController =require('./controllers/UserController');
const redirectIfAuth = require('./middleware/redirectIfAuth')
const authMiddleware = require('./middleware/authMiddleware')
const vieworder = require('./controllers/AdminViewOrder')
const dateController = require('./controllers/dateController')
const reviewController = require('./controllers/ReviewController')
// const redirectIfAuth = require('./middleware/redirectIfAuth')
// const authMiddleware = require('./middleware/authMiddleware')


app.use("*", (req, res, next) => {
  loggedIn = req.session.userId
  next()
})

app.post('/register',RegisterController.register);
app.post('/login',LoginController.login);
app.post('/admincreate',AdminCreate.admincreate);
app.post('/adminlogin',AdminLogin.adminlogin);
app.post('/ordercalculate',OrderController.orderCalculate);
// app.post('/placeorder',OrderController.placeOrder);
app.post('/successorder',OrderController.SuccessOrder);


app.get('/logout', logoutController.logout);
app.get('/profile/:userID', userController.userProfile);
app.put('/editUserProfile/:userID',userController.edituserProfile)
app.get('/tourinfo',TourinfoController.getAllTourInfo);
app.get('/tourinfo/:tourName',TourinfoController.getTourByName);
app.get('/tourinfoid/:tourId',TourinfoController.getTourById);
// app.get('/home', SesController);
app.get('/getuserorder/:orderID',OrderController.GetUserOrder);
app.get('/getalluserorder/:userID',OrderController.GetAllUserOrder);

app.post('/create-checkout-session',CreateCheckout.createCheckoutSession);
app.get('/session-status',SessionStatus.SessionStatus)

app.post('/allorder',vieworder.AllOrder)
app.get('/selectorder',vieworder.AdminSelectOrder)

app.post('/disabledate',dateController.disableDate)
app.delete('/deletedate',dateController.deleteDate)
app.get('/getclosedates',dateController.getCloseDates)

app.post('/postreview',reviewController.postReview)
app.get('/getReviewCover',reviewController.getAllTourReviewCover)
app.get('/getTourReviewById/:tour_id',reviewController.getTourReviewById)

// app.delete('/delete-order/:orderID',OrderController.DeleteOrder)

app.listen(3001, () => {
  console.log('Application is running on port 3001');
});