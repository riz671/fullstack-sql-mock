// Controller here
// complete building out the controller
const dbHelpers = require('../db/dbhelpers.js');

const controller = {
  // fetch result from model
  get: (req, res) => {
    dbHelpers.getProductsHelper((err, result) => {
      err ? res.status(404).send(err) : res.status(200).json(result);
    });
  },

  // sends to model for posting item to db &&
  // checks if products was posted
  post: (req, res) => {
    dbHelpers.postProductsHelper(req.body, (err, result) => {
      err ? res.status(404).send(err) : res.status(201).send('successful post');
    });
  },

  put: (req, res) => {
    res.send('put!');
  },
  delete: (req, res) => {
    res.send('delete!');
  }
};

module.exports = controller;