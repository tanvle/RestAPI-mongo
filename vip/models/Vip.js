// **** Model Vip.js ****

const mongoose = require('mongoose');

const VipSchema = new mongoose.Schema({
  
  id: Number,

  member: {
    type: String,
    trim: true,
    maxlength: 10
  },
  
  primcat: {
    type: String,
    trim: true,
    maxlength: 15
  },

  sndcat: {
    type: String,
    trim: true,
    maxlength: 15
  },

  infolevel: {
    type: String,
    trim: true,
    maxlength: 10
  },
  
  searchfield: {
    type: String,
    maxlength: 25
  },
  
  accountname: {
    type: String,
    maxlength: 35
  },

  mycontact: {
    type: String,
    required: false,
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Enter valid email"
    ],
    maxlength: 60
  },

  url: {
    type: String
  },
  
  username: {
    type: String,
    trim: true
  },
  
  userpass: {
    type: String,
    trim: true,
    maxlength: 20
  },

  accountnum: {
    type: String,
    trim: true
  },

  accountinfo: String,
  remark: String,
  
  updated: {
    type: Date,
    default: Date.now
  },

//  
});

// Must export model, where <Vip> is singular reference to collection <resources>
  module.exports = mongoose.model('Vip', VipSchema);