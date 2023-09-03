const mongoose = require('mongoose');

const DbConnection =async()=>{
    try{
        mongoose.connect('mongodb://localhost:27017/contextpractice');
        console.log("db connected");
    }
    catch(error)
    {
        console.log(error.message);
    }
}

module.exports=DbConnection;