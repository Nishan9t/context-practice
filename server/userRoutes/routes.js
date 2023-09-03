const express = require('express');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const userModel = require('../models/userSchema');

//creating user express router
const route = express.Router();

route.post('/signup',async(req,res)=>{

    try{
        const {name,email,password}=req.body;

        //check emptiness of req data
        if(!name||!email||!password)
        {
            return res.json({message:"please enter all details"});
        }

        //check if user already exist or not
        const userExist = await userModel.findOne({email:req.body.email});
        if(userExist)
        {
            return res.json({message:"user already exist"});
        }
        //hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password,salt);


        //changing password with hash
        const user = new userModel({...req.body,password:hashPassword});
        await user.save();

        //creating token
        const token = await jwt.sign({id:user._id},"nishant",{expiresIn:'24h'});


        return res.send({data:token,message:'user registered successfully',user:user});

    }
    catch(error)
    {
        res.json({message:"error",error:error});
    }

});

module.exports=route;
