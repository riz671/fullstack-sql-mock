// build your database
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloKitty',
  database: 'EBayDB'
});

db.connect();

module.exports = db;