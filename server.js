const express = require('express');
require('dotenv').config();
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
// app.use('/cart', require('./routes/cartRoutes'));
// app.use('/orders', require('./routes/orderRoutes'));

app.listen(5000, () => console.log("Server running on port 5000"));
