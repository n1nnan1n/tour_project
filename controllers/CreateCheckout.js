const stripe = require('stripe')('sk_test_51OGNrcDiyx2jx89Ts9UoCQ87JXPWOvDSjTpkyV4uYitzwHhIPXI4HBBYt8ltEVwlF3sItOtR9y1jcmembbJRqbOD00putV2ZDT');

const createCheckoutSession = async (req, res) => {
  try {
    if (loggedIn) {
      res.send('You loggedIn');
      return;
    }

    const {
      order_user_id, 
      order_user_email,
      order_tour_id,
      order_quantity,
      order_tour_date,
      order_tour_price,
      order_total_price
    } = req.body;
                   
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: getProductPriceId(order_tour_id),
          quantity: order_quantity
        },
      ],
      mode: 'payment',
      redirect_on_completion: 'never'
      // return_url: ``,
      // return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
      // return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}&order_user_id=${order_user_id}&order_user_email=${order_user_email}&order_tour_id=${order_tour_id}&order_quantity=${order_quantity}&order_tour_date=${order_tour_date}&order_tour_price=${order_tour_price}&order_total_price=${order_total_price}`
    });
  
    res.send({
      clientSecret: session.client_secret,
      orderdata:{
        order_user_id, 
        order_user_email,
        order_tour_id,
        order_quantity,
        order_tour_date,
        order_tour_price,
        order_total_price
      }
    });

    function getProductPriceId(tour_id) {
        if (tour_id === '655a2fae9b4c465647c4609a') {
          return 'price_1OJUqLDiyx2jx89TjLCVacym';
        } else if (tour_id === '655e1317a5dd819be5edeb6d') {
          return 'price_1OL92ZDiyx2jx89TqeBcJgBx';
        } else if (tour_id === '655e1533a5dd819be5edeb6e') {
          return 'price_1OL93YDiyx2jx89TQyGvTpuN';
        }else if (tour_id === '655ee85bdc69725f99120b84') {
          return 'price_1OL944Diyx2jx89TVwzjBgHf';
        }else if (tour_id === '655ee996dc69725f99120b85') {
          return 'price_1OL94MDiyx2jx89TtA9JiYbF';
        }else if (tour_id === '655eee2fdc69725f99120b86') {
          return 'price_1OL94lDiyx2jx89TeBH2d8QG';
        }else if (tour_id === '655eef3adc69725f99120b87') {
          return 'price_1OL95CDiyx2jx89T9ZzotPUw';
        }else if (tour_id === '655ef143dc69725f99120b88') {
          return 'price_1OL95dDiyx2jx89TDpRfl6yn';
        }else if (tour_id === '655ef329dc69725f99120b89') {
          return 'price_1OL95xDiyx2jx89Tcemfmfbu';
        }
      }

} catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
  };
module.exports = { createCheckoutSession };
  