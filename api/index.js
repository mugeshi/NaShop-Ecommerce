const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/product");
dotenv.config();


const mongoose = require("mongoose")

//connect db
mongoose.connect().then(() => console.log("db connected")).then((err)=>{
    err;
})


const PORT = process.env.PORT;
app.listen(PORT || 9000 ,() =>{
    console.log(`server listening on port ${PORT}`)

});
    






// //api product test route
// app.get("/api/products", (req, res)=>{
    
//  res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//     const productId = req.params.id; // Extract the id parameter from request params
//     const product = products.find((product) => product.id === productId); // Find the product by id
//     res.json(product); // Send the found product as JSON response
// });
