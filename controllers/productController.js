const { getAllProducts, getProductById, createProduct } = require("../models/productModel");

// View products
async function listProducts(req, res) {
  const products = await getAllProducts();
  return res.json(products);
}

// Add product (admin)
async function addProduct(req, res) {
  const { product_name, description, price, stock } = req.body;
  await createProduct(product_name, description, price, stock);
  return res.status(201).json({ message: "Product created" });
}

module.exports = { listProducts, addProduct };
