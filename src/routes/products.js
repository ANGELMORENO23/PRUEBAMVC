const express = require('express');
const router = express.Router();
const {productDetail, productCart,formCreate,dashboard,create} = require("../controllers/productControllers")
/* GET home page. */
router.get('/productDetail', productDetail)
router.get('/productDetail/:id', productDetail)
router.get('/productCart', productCart)
router.get('/productcreate', formCreate)
//Listar productos
router.get('/dashboard', dashboard)
//Crear productos
.post('/create', create)



module.exports = router