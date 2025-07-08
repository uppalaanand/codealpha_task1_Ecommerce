const express = require("express");
const { handleProduct } = require("../controllers/product");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, './uploads');
    },
    filename: function (req, file, cb){
        return cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({ storage})


router.post("/", upload.single('image'),  handleProduct);

module.exports = router;