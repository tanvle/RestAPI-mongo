// **** server.js ***
const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');

// local import
const homes = require('./routes/homes');
const vips = require('./routes/vips')

// Setup express
const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', homes);
app.use('/api/v1/vips', vips);


// *******************
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    `listening on port:${PORT}`.blue.underline );
});

const MONGO_URL = 'mongodb://localhost/txms';
dbConnect = mongoose.connect(MONGO_URL)
  .then(() => {
    console.log(
      `connected to ${MONGO_URL}`.blue.underline );
  })
  .catch((err) => {
    console.log(`dbase not connected...`);
  })
