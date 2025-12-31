// const { connPool } = require("../connect.js");
// const {sqlObject} = require("../models/sql.js");

const connPool = require('../connect.js');
const sqlObject = require('../models/sql.js');


// Fetch all products
async function getAllProducts() {
  const [rows] = await connPool.query(sqlObject.getProducts);
  return rows;
}

// Fetch single product by ID
async function getProductById(product_id) {
  const [rows] = await connPool.query(sqlObject.getProductById, [product_id]);
  return rows[0];
}

// Create a new product (admin only)
async function createProduct(product_name, description, price, stock) {
  const [result] = await connPool.query(sqlObject.addProduct, [product_name, description, price, stock]);
  return result;
}

module.exports = { getAllProducts, getProductById, createProduct };


