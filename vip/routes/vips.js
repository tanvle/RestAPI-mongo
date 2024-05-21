// ***  File: routes/vips.js ***
const express = require('express');

const { 
  getVips,
  createVips,
  getOneVip,
  updateOneVip,
  deleteOneVip
} = require('../controllers/vips');

const router = express.Router();

router.route('/')
  .get(getVips)
  .post(createVips)

router.route('/:id')
  .get(getOneVip)
  .put(updateOneVip)
  .delete(deleteOneVip)

module.exports = router;