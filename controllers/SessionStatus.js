const stripe = require('stripe')('sk_test_51OGNrcDiyx2jx89Ts9UoCQ87JXPWOvDSjTpkyV4uYitzwHhIPXI4HBBYt8ltEVwlF3sItOtR9y1jcmembbJRqbOD00putV2ZDT');

const SessionStatus = async (req, res) => {
  try {
    if (loggedIn) {
      res.send('You loggedIn');
      return;
    }

    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
        res.send({
          status: session.status,
          payment_status: session.payment_status,
          customer_email: session.customer_details.email,
        });
} catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  };
module.exports = { SessionStatus };
  