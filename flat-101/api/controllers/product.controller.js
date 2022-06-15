const Product = require('../models/product.model');

module.exports.create = (req, res, next) => {
    const product = {name, description, price, units} = req.body;
    Product.create({...product, image: req?.file?.path})
        .then(product => res.json(product))
        .catch(next)
}

module.exports.list = (req, res, next) => {
    Product.find()
        .then(products => res.json(products))
        .catch(next)
}