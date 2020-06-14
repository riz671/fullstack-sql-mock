// Router here
// these routes are correct. there is no need to modify anything!
const router = require('express').Router();
const controller = require('./controller.js');

// route to products path
router
  .route('/products')
  .get(controller.get)
  .post(controller.post);

router
  .route('/products/:_id')
  .put(controller.put)
  .delete(controller.delete);


// route to name path
router
  .route('/name')
  .get(controller.get)
  .post(controller.post);

// MAY NOT NEED PARAMS -> Come back to this
router
  .route('/name/:_id')
  .put(controller.put)
  .delete(controller.delete);

module.exports = router;