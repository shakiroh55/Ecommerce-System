const router = require('express').Router();
const {listProducts,addProduct} = require('../controllers/productController');

router.get('/view', listProducts);
router.post('/add', addProduct);

module.exports = router;
 