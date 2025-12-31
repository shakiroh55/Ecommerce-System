// const { connPool } = require("../connect.js");
// const {sqlObject} = require("../models/sql.js");

const connPool = require('../connect.js');
const sqlObject = require('../models/sql.js');

// Create a new product (admin only)
async function createProduct(product_name, description, price, stock) {
  const [result] = await connPool.query(sqlObject.addProduct, [product_name, description, price, stock]);
  return result;
}

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

// Update a product by ID
async function editProduct(product_id, product_name, description, price, stock) {
  const [rows] = await connPool.query(sqlObject.updateProduct, [product_name, description, price, stock, product_id]);
  return rows[0];
}
// delete a product by ID
async function delProduct(product_id) {
  const [rows] = await connPool.query(sqlObject.deleteProduct, [product_id]);
  return rows[0];
}



module.exports = { getAllProducts, getProductById, createProduct, editProduct, delProduct };