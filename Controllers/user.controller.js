//Impiorting Required Modules
const userModel = require("../Models/user.model");
const bcrypt = require('bcryptjs');
const Util = require('../Utils/util')


exports.createUser = async (req, res, next) => {
    const {
        name,
        email,
        phone,
        password
    } = req.body
    if (!name || name == null || name == undefined || String(name).length == 0) {
        return res.send({
            status: 3001,
            message: "Name is Required"
        })
    }
    if (!email || email === null || email == undefined || String(email).length == 0) {
        return res.send({
            status: 3001,
            message: "Email is Required"
        })
    }
    if (Util.emailcheck(email)) {
        return res.send({
            status: 3001,
            message: "Please provide right Email"
        })
    }
    if (!phone || phone == null || phone == undefined || String(phone).length == 0) {
        return res.send({
            status: 3001,
            message: "Phone Number is Required"
        })
    }

    try {
 
        const gensalt =  await bcrypt.genSalt(10);
        const encryptedpassword = await bcrypt.hash(password, gensalt);


        const user = new userModel({
            name: name,
            email: email,
            phone: phone,
            password: encryptedpassword,
            isActive:false,
            isVerified: false
        })
        user.save(async (err,result)=>{
           if(err){
            console.log(err)
              return res.send({status:3002, Message:'Got some Error'})
           }else{
             return res.send({status:3002, Message:'User Created Succesfully'})
           } 
        })


    } catch (err) {
        console.log(err)
    }
   
}