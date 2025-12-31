const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.json());

// Routes
app.use('/auth', require('./routes/authRoutes'));
// app.use('/products', require('./routes/productRoutes'));
// app.use('/cart', require('./routes/cartRoutes'));
// app.use('/orders', require('./routes/orderRoutes'));

app.listen(5000, () => console.log("Server running on port 5000"));
