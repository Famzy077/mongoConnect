const express = require('express')
const productController = require('../controller/productController')
const router = express.Router()

router.route('/')
.get(productController.getProduct)
.post(productController.createProduct)
router.get('/id:', productController.singleProduct)
router.delete('/id:', productController.deleteProduct)
router.delete('/deleteMany', productController.deleteManyProduct)

module.exports = router