const express = require("express");
const { handleHome } = require("../controllers/home");
const { handleGetAllProducts } = require("../controllers/product");
const { handleGetSingleData } = require("../controllers/product");
const { handleRegisterUser } = require("../controllers/user");
const { handleLoginUser } = require("../controllers/user");

const router = express.Router();

router.get('/', handleHome);
router.get('/products', handleGetAllProducts);
router.get('/product/:id', handleGetSingleData);

router.post('/signup', handleRegisterUser);
router.post('/login', handleLoginUser);

module.exports = router;