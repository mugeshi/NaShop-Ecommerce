const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();


//test route
app.get("/", (req, res)=>{
 res.send("app is running");
});


const PORT = process.env.PORT;
app.listen(PORT || 9000 ,() =>{
    console.log(`server listening on port ${PORT}`)

});
    