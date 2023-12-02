const express = require('express');
const router = express.Router();
const {productDetail, productCart,productedit} = require("../controllers/productControllers")
/* GET home page. */
router.get('/productDetail', productDetail)
router.get('/productDetail/:id', productDetail)
router.get('/productCart', productCart)
router.get('/productedit', productedit)





module.exports = router