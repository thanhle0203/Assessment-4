const express = require('express');
const app = express();

const productRoutes = require('./routes/productRoutes');

app.use('/api/products', productRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})