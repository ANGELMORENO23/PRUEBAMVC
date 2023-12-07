const express = require('express');
const router = express.Router();
const {productDetail,detail, productCart,formCreate,dashboard,create,formUpdate,update,productDelete} = require("../controllers/productControllers")
/* GET home page. */
router.get('/productDetail', productDetail)
router.get('/productDetail/:id', productDetail)
router.get('/productCart', productCart)

//Listar productos
router.get('/dashboard', dashboard)
//Crear productos
.post('/create', create)
router.get('/productcreate', formCreate)
//Ver productos
.get('/detail/:id', detail)
//Actualizar productos
.get('/formUpdate/:id',formUpdate)
.put('/update/:id', update)
//Borrar productos
.delete('/delete/:id', productDelete)

module.exports = router