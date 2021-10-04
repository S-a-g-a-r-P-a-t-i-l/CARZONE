<<<<<<< HEAD
const express =require("express");
const app =express();

app.use(express.json())

//Route Imports
const product =require("./routes/productRoute");

app.use("/api/v1",product);
=======
const express = require("express");
const app = express();

app.use(express.json())
//Routes imports
const product = require("./routes/productRoute");
app.use("/api/v1",product)
>>>>>>> 23d0edf2063d28596ecbf8e93876ad9c0d4988d3

module.exports = app