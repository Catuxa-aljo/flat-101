const express = require('express');
const createError = require('http-errors');

const router = express.Router()
const products = require('../controllers/product.controller')
const upload = require('./multer.config')

router.post('/create-product', upload.single('image'), products.create);
router.get('/', products.list)

router.use((req, res, next) => next(createError(404, 'Route not found')))

module.exports = router