require("dotenv").config();
const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`Listening at http://localhost:${process.env.PORT}`);
  }
});
