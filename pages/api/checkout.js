const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        line_items: [{ price: 'price_1L5RztSADDxoHz7XDAd63u35', quantity: 1 }],
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?cancelled=true`,
      });
      res.redirect(303, session.url);
    } catch (e) {
      res.status(e.statusCode || 500).json(e.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
