const express = require("express");
const DbConnection = require("./database/db.js");
const { route } = require("./userRoutes/routes.js");
const cors = require('cors')


const app= express();
app.use(cors());
app.use(express.json())

//db connection
DbConnection();


app.use('/',route);

app.listen(8000,()=>{
    console.log("server is running on port 8000")

})