const Product = require("../models/product");
const path = require("path");

async function handleProduct(req, res) {
    const body = req.body;
    await Product.create({
        id: body.id,
        title: body.title,
        name: body.name,
        category: body.category,
        image: `/uploads/${req.file.filename}`,
        new_price: body.new_price,
        old_price: body.old_price,
        rating: body.rating,
        stock: body.stock,
        description: body.description
    });
    return res.status(201).json({ "image": "Success" });
}

async function handleGetAllProducts(req, res) {
    const products = await Product.find();
    return res.json(products);
}

async function handleGetSingleData(req, res) {
    const product = await Product.findById({ _id: req.params.id });
    console.log(product);
    return res.json(product);
}

module.exports =  { handleProduct, handleGetAllProducts, handleGetSingleData };