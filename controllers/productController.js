const {
  getAllProducts,
  getProductById,
  createProduct,
  editProduct,
  delProduct
} = require("../models/productModel");

// Add product (admin)
async function addProduct(req, res) {
  try {
    const { product_name, description, price, stock } = req.body;
    await createProduct(product_name, description, price, stock);
    return res.status(201).json({ message: "Product created" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

// View products
async function listProducts(req, res) {
  try {
    const products = await getAllProducts();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function listProductById(req, res) {
  try {
    const { product_id } = req.params;
    const product = await getProductById(product_id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateProduct(req, res) {
  try {
    const { product_id } = req.params;
    const { product_name, description, price, stock } = req.body;
    await editProduct(product_id, product_name, description, price, stock);
    return res.status(200).json({ message: "Product updated" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteProduct(req, res) {
  const { product_id } = req.params;
  await delProduct(product_id);
  return res.status(200).json({ message: "Product deleted Successfully" });
}

module.exports = { listProducts, addProduct, listProductById, updateProduct, deleteProduct };