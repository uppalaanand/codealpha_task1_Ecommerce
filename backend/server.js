const express = require("express");
const homeRoutes= require("./routes/home");
const productRoutes = require("./routes/product");
const { connectToDatabase } = require("./connection");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

connectToDatabase(process.env.MONGO_URL).then(() => {
    console.log("MongoDB is Connected");
}).catch(() => {
    console.log("MongoDB is Not Connected");
})


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({ extended: false}));

app.use('/', homeRoutes);
app.use('/api/put', productRoutes);

app.listen(PORT, () => {
    console.log("Server Started at PORT:", PORT);
});