const express = require("express");
const DbConnection = require("./database/db");
const { route } = require("./userRoutes/routes");


const app= express();

//db connection
DbConnection();


app.use('/',route);

app.listen(8000,()=>{
    console.log("server is running on port 8000")

})