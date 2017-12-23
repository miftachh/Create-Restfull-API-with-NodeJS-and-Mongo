'use strict';


var mongoose = require('mongoose'),
  Product = mongoose.model('Product');

exports.list_all_product = function(req, res) {
  Product.find({}, function(err, prod) {
    if (err)
      res.send(err);
    res.json(prod);
  });
};




exports.create_a_product = function(req, res) {
  var new_product = new Product(req.body);
  new_product.save(function(err, prod) {
    if (err)
      res.send(err);
    res.json(prod);
  });
};


exports.read_a_product = function(req, res) {
  Product.findById(req.params.prodId, function(err, prod) {
    if (err)
      res.send(err);
    res.json(prod);
  });
};


exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.prodId}, req.body, {new: true}, function(err, prod) {
    if (err)
      res.send(err);
    res.json(prod);
  });
};


exports.delete_a_product = function(req, res) {


  Product.remove({
    _id: req.params.prodId
  }, function(err, prod) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};