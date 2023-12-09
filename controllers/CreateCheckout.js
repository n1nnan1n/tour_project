const stripe = require('stripe')('sk_test_51OGNrcDiyx2jx89Ts9UoCQ87JXPWOvDSjTpkyV4uYitzwHhIPXI4HBBYt8ltEVwlF3sItOtR9y1jcmembbJRqbOD00putV2ZDT');

const createCheckoutSession = async (req, res) => {
    const YOUR_DOMAIN = 'http://localhost:3000';
    // const YOUR_DOMAIN = 'https://tour-project-git-toon-n1nnan1ns-projects.vercel.app';
    try {
    // const { user_id, tour_id, quantity, tour_date, tour_price, total_price } = req.body;
    const { quantity } = req.body;
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1OJUqLDiyx2jx89TjLCVacym',
        //   userID : user_id,
        //   userID : tour_id,
        //   tourdate: tour_date,
        //   price: total_price,
          quantity: quantity,
        },
      ],
      mode: 'payment',
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
  
    res.send({clientSecret: session.client_secret});
} catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  };
module.exports = { createCheckoutSession };
  