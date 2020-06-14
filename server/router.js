// Router here
// these routes are correct. there is no need to modify anything!
const router = require('express').Router();
const controller = require('./controller.js');

// route to products path
// gets all products
router
  .route('/products')
  .get(controller.get)
  .post(controller.post);

router
  .route('/products/:_id')
  .put(controller.put)
  .delete(controller.delete);


// route to name path

// TODO: gets only 1 products -> get should point to an id params
router
  .route('/name')
  .post(controller.post);

router
  .route('/name/:_id')
  .get(controller.getOne)
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;