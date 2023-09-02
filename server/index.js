const express = require("express");
const DbConnection = require("./database/db");


const app= express();

//db connection
DbConnection();

app.listen(8000,()=>{
    console.log("server is running on port 8000")

})