const userModel = require('../models/user');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY ="NOTESAPI"

const signup =async (req,res) => {
    
    // Existing user check
    // hash password
    // user creation
    // token generation


    
    const {username,password,email} = req.body;
    try {
        // Existing user check start
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({msg:'User Already exists'})
        }
    // hash password start    
    const hashedPssword = await bcrypt.hash(password,10);

    // user creation start
    const result = await userModel.create({
        email:email,
        password:hashedPssword,
        username:username
    })

    // token generation start
    const token = jwt.sign({email:result.email,id:result._id},SECRET_KEY)

    // last ma humy res method zaroor call karna hai
    res.status(201).json({user:result,token:token});

    } 
    catch (error) {
        console.log(error);
        res.status(500).json({msg:'Something Went Wrong'})
    }


}

const signin =async (req,res) => {

    const {email,password} = req.body;

    try {
        const existingUser = await userModel.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({msg:'User Not Found'})
        }

        //match password
        const matchPassword = await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({msg:"Invalid Credentials"});
        }

    // token generation start
    const token = jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY)

    // last ma humy res method zaroor call karna hai
    res.status(200).json({user:existingUser,token:token});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({msg:'Something Went Wrong'})
    }

    
}

module.exports = {signup,signin}