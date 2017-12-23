'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  price: {
    type: Number,
    required: 'Kindly enter the name of the task'
  },
  type: {
    type: [{
      type: String,
      enum: ['Fashion', 'Computer', 'Electronic','Sport']
    }],
    default: ['Fashion']
  },
  qty: {
    type: Number,
    required: 'Kindly enter the name of the task'
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', ProductSchema);