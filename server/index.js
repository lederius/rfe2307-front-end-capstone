require("dotenv").config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

console.log(process.env.TOKEN);

// ROUTES BELOW
app.get(`/reviews/`, (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', {
    headers: {Authorization: `Bearer ${process.env.TOKEN}`}
  })
    .then(data => console.log(res.data))
    .catch(err => console.log('failed get request', err))
})

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});
