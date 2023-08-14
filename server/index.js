require("dotenv").config();
const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(cors());

// ROUTES BELOW
app.get('/reviews/:productID', (req, res) => {
  const id = req.params.productID;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}`, {
    headers: {Authorization: `${process.env.TOKEN}`},
  })
    .then(response => res.send(response.data.results))
    .catch(err => console.log('failed get request', err));
});



// Question and Answers API Routing
app.get('/qa/questions/:product_id', (req, res) => {
  var productId = req.params.product_id;
  console.log(`${process.env.API_URL}qa/questions/${productId}`);
  axios.get(`${process.env.API_URL}qa/questions/?product_id=${productId}`, {headers: {Authorization: `${process.env.TOKEN}`}})
    .then((product) => {
      // console.log(product.data);
      res.send(product.data);
    })
    .catch(err => {
      console.log(err);
    });
});


app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products', {
    headers: { Authorization: process.env.TOKEN }
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log('Failed to get request', err);
      res.status(500).json({ error: 'Failed to fetch products' });
    });
});

//list of related products
app.get('/products/:product_id/related', (req, res) => {
  var productid = req.body.password;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productid}/related`, {
    headers: { Authorization: process.env.TOKEN }
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log('Failed to get request', err);
      res.status(500).json({ error: 'Failed to fetch list of related products' });
    });
});

//styles
app.get('/products/:product_id/styles', (req, res) => {
  var productid = req.body.password;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${productid}/styles`, {
    headers: { Authorization: process.env.TOKEN }
  })
    .then(response => {
      res.json(response.data);
    })
    .catch(err => {
      console.log('Failed to get request', err);
      res.status(500).json({ error: 'Failed to fetch list of styles' });
    });
});



app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});




