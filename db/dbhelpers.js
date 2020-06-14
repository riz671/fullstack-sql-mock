/* eslint-disable camelcase */
// complete and fix the dbhelpers
const db = require('./index.js');

const dbHelpers = {
  // fetch result from db
  getProductsHelper: (callback) => {
    let queryString = 'SELECT * FROM ItemInformation;';

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  },

  getOneProduct: (params, callback) => {
    let { _id } = params;

    let queryString = `SELECT * FROM ItemInformation WHERE id = ${_id};`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  },

  getProductBeingSearched: (params, callback) => {
    let { name } = params;

    let queryString = `SELECT * FROM ItemInformation WHERE item = "${name}";`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  },

  // add an item to db
  // body is object holding all values. desctructured for ease
  postProductsHelper: (body, callback) => {
    let { item, min_cost, curr_bid, ends_in, item_image } = body;

    let queryString = `INSERT INTO ItemInformation (item, min_cost, curr_bid, ends_in, item_image) VALUES ("${item}", ${min_cost}, ${curr_bid}, ${ends_in}, "${item_image}");`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  },

  // needs body to update info
  // updating curr_bid only.
  updateProductHelper: (params, body, callback) => {
    let { _id } = params;
    let { curr_bid } = body;

    let queryString = `UPDATE ItemInformation SET curr_bid = ${curr_bid} WHERE id = ${_id};`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  },

  // // delete at id in in param
  deleteProductHelper: (params, callback) => {
    console.log(params._id);
    let queryString = `DELETE FROM ItemInformation WHERE id = ${params._id};`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  }
};

module.exports = dbHelpers;
