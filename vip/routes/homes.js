// ***  /routes/homes-01.js ***
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({msg: 'API endpoint: /api/v1/vips'});
});

router.get('/api', (req, res) => {
  res.json({msg: 'API endpoint: /api/v1/vips'});
});

router.get('/api/v1', (req, res) => {
  res.json({msg: 'API endpoint: /api/v1/vips'});
});

module.exports = router;