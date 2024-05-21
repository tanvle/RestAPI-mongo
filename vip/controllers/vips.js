// ***  File controllers/vips.js ***

const express = require('express');
const Vip = require('../models/Vip')

// *******************************************
// @desc    Get all
// @route   GET /api/v1/vips
// @access  Public
exports.getVips = async (req, res, next) => {
  try {
    let query;
    
    // duplicate object req.query
    const reqQuery = { ...req.query };
      console.log(reqQuery);

    // remove fields for select, sort etc. from reqQuery
    const removeFields = ['select', 'sort'];
    removeFields.forEach(param => delete reqQuery[param])
      console.log(reqQuery);  
    
    // create query string
    let queryStr = JSON.stringify(reqQuery);
      console.log(queryStr);

    // create operators: gt, lte, in, regex, options etc.
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in|regex|options)\b/g, match => `$${match}`);  
    
    // **** START FINDING VIPS  ****
    query = Vip.find(JSON.parse(queryStr));

    // select fields to display
    if (req.query.select) {
      const fields = req.query.select.split(',').join(' ');
      query = query.select(fields);
    }

    // select sort order
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      query = query.sort(sortBy);
    }

    // pagination
    const page = parseInt(req.query.page, 1) || 1;
    const limit = parseInt(req.query.limit, 100) || 300;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await Vip.countDocuments(); // mongoose method

    // format pages for query
    query = query.skip(startIndex).limit(limit);

    // EXECUTING QUERY
    const vips = await query;

    // pagination results
    const pagination = {};

    if (endIndex < total) {
      pagination.next = {
        page: page + 1,
        limit
      }
    }

    if (startIndex > 0) {
      pagination.prev = {
        page: page - 1,
        limit
      }
    }


    // RETURN VIPS FOUND **** //
    res
      .status(200)
      .json({
        count: vips.length,
        pagination: pagination,
        data: vips
      });    
  } 
  catch (err) {
    next(err);
  }
}
// ********************************************
// @desc    Create new one
// @route   POST /api/v1/vips
// @access  Private
exports.createVips = async (req, res, next) => {
  try {
    const vips = await Vip.create(req.body);
    
    res
      .status(200)
      .json({ msg: 'vips successfully created', vips});    
  } 
  catch (err) {
    next(err);
  }
}

// ********************************************
// @desc    Get one
// @route   GET /api/v1/vips/:id
// @access  Public
exports.getOneVip = async (req, res, next) => {
  try {
    const vip = await Vip.findById(req.params.id);
    if (!vip) {
      return res.json({ msg: `Vip ID: ${req.params.id} not found` });
      }

    res
      .status(200)
      .json({msg: `Vip ID: ${req.params.id} found`, vip});    
  } 
  catch (err) {
    next(err);
  }   
}

// ********************************************
// @desc    Update one
// @route   PUT /api/v1/vips/:id
// @access  Private
exports.updateOneVip = async (req, res, next) => {
  try {
    const vip = await Vip.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    
    if (!vip) {
      return res.json({ msg: `Vip ID: ${req.params.id} not found` });
    }
    
    res
      .status(200)
      .json({ msg: `Vip ${req.params.id} successfully updated`, vip});    
  } 
  catch (err) {
    next(err);
  }    
}

// *********************************************
// @desc    Delete one
// @route   DELETE /api/v1/vips/:id
// @access  Private
exports.deleteOneVip = async (req, res, next) => {
  try {
    const vip = await Vip.findByIdAndDelete(req.params.id);
    if (!vip) {
      return res.json({ msg: `Vip ID: ${req.params.id} not found` });
      }
    
    res
      .status(200)
      .json({ msg: `Vip ${req.params.id} successfully deleted`});    
  } 
  catch (err) {
    next(err);
  }   
}