// build your database
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'helloKitty',
  database: 'EBayDB'
});

connection.connect();

module.exports = db;