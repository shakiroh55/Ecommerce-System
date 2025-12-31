const mysql = require('mysql2/promise');
require('dotenv').config();

const connPool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DB,
  password: process.env.PASS
});

module.exports = connPool;