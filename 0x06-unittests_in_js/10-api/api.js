/* By using express, create an instance of express called app
Listen to port 7865 and log API available on localhost port 7865 to the browser
console when the express server is started
For the route GET /, return the message Welcome to the payment system
Add a new endpoint: GET /cart/:id
:id must be only a number (validation must be in the route definition)
When access, the endpoint should return Payment methods for cart :id
*/

const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (isNaN(req.params.id)) {
    res.status(404).send('Cart id is not a number');
  } else {
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
