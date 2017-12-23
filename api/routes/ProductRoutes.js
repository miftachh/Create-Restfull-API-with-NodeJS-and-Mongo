'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/ProductController');

  // todoList Routes
  app.route('/product')
    .get(todoList.list_all_product)
    .post(todoList.create_a_product);


  app.route('/product/:prodId')
    .get(todoList.read_a_product)
    .put(todoList.update_a_product)
    .delete(todoList.delete_a_product);
};
