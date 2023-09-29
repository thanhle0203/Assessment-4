const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
        res.send('Product added');
    } catch (error) {
        res.status(400).send(error);
    }
};

