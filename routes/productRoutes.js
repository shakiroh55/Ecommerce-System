const router = require('express').Router();
const {listProducts,addProduct, listProductById, updateProduct, deleteProduct} = require('../controllers/productController');

router.post('/add', addProduct);
router.get('/view', listProducts);
router.get('/view/:product_id', listProductById);
router.put('/edit/:product_id', updateProduct);
router.delete('/delete/:product_id', deleteProduct);
module.exports = router;
 