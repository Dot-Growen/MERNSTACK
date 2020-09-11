const { Product } = require('../models/product.model');
const { request, response } = require('express');

module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}

module.exports.showAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => res.json({ message: "something went wrong", error: err }));
};

module.exports.createProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err));
};

module.exports.getProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(person => res.json(person))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
    .then(updatedProduct => res.json(updatedProduct))
    .catch(err => res.json(err))
}

module.exports.deleteProduct = ( req, res ) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}