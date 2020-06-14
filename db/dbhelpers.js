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

  // add 1 item to db
  // body is object holding all values
  // TODO: ADD VALUE KEYS AFTER VALUES
  postProductsHelper: (body, callback) => {
    let queryString = `INSERT INTO ItemInformation (item, min_cost, curr_bid, ends_in, item_image) VALUES ${/*TODO ===>*/} ("${body}", ${body}, ${body}, ${body}, "${body}");`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  },

  // needs body to update info
  // DO I REALLY NEED PARAMS IF I CAN SUPPLY ID FROM BODY?
  //// probably need it, but an idea
  // updating some vals. Not updating name, min_cost, ends_in(?), item_image
  // LOL updating only one val
  updateProductHelper: (params, body, callback) => {
    let queryString = `UPDATE ItemInformation SET curr_bid = ${/*TODO*/} WHERE id = ${/*TODO*/};`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  },

  // delete at id in in params
  deleteProductHelper: (params, callback) => {
    let queryString = `DELETE FROM ItemInformation WHERE id = ${/*TODO*/};`;

    db.query(queryString, (err, result) => {
      err ? callback(err, null) : callback(null, result);
    });
  }
};

module.exports = dbHelpers;
