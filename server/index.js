require("dotenv").config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// ROUTES BELOW
app.get('/reviews/:productID', (req, res) => {
  const id = req.params.productID;
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${id}`, {
    headers: {Authorization: `${process.env.TOKEN}`},
  })
    .then(response => res.send(response.data.results))
    .catch(err => console.log('failed get request', err))
})

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});
