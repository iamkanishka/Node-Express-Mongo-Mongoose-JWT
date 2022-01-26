//Impiorting Required Modules
const userModel = require("../Models/user.model");
const bcrypt = require('bcryptjs');
const Util = require('../Utils/util')

/**
 * 
 * @param {{name,email,phone,password}} req Request has the incomming Data of User  
 * @param {{Status, message}} res Response provides for corresponding  request
 * @returns Returns with User Creation
 */
exports.createUser = async (req, res) => {
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
    if (!Util.emailcheck(email)) {
        return res.send({
            status: 3001,
            message: "Please provide right formatted Email"
        })
    }
    if (!Util.passwordcheck(password)) {
        return res.send({
            status: 3001,
            message: "Please provide right formatted Password"
        })
    }
    if (!phone || phone == null || phone == undefined || String(phone).length == 0) {
        return res.send({
            status: 3001,
            message: "Phone Number is Required"
        })
    }

    try {


        const usercheck = await Util.userExistencecheck(email, phone)
        console.log(usercheck)
        if (!usercheck.success) {
            return res.send({
                status: usercheck.status,
                message: usercheck.Message
            })
        }


        const gensalt = await bcrypt.genSalt(10);
        const encryptedpassword = await bcrypt.hash(password, gensalt);
        const user = new userModel({
            name: name,
            email: email,
            mobile: phone,
            password: encryptedpassword,
            isActive: false,
            isVerified: false
        })
        user.save(async (err, result) => {
            if (err) {
                console.log(err)
                return res.send({
                    status: 3020,
                    Message: err._message,
                    error: err.errors
                })
            } else {
                return res.send({
                    status: 3023,
                    Message: 'User Created Succesfully'
                })
            }
        })


    } catch (err) {
        console.log(err)
        return res.send({
            status: 3002,
            Message: 'User Created Succesfully'
        })
    }

}



exports.editUser = async (req, res) => {
    const {
        name,
        email,
        phone,
       
        id
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
    if (!Util.emailcheck(email)) {
        return res.send({
            status: 3001,
            message: "Please provide right formatted Email"
        })
    }
    if (!phone || phone == null || phone == undefined || String(phone).length == 0) {
        return res.send({
            status: 3001,
            message: "Phone Number is Required"
        })
    }

    try {


        const usercheck = await Util.userExistencecheck(email, phone)
        console.log(usercheck)
        if (!usercheck.success) {
            return res.send({
                status: usercheck.status,
                message: usercheck.Message
            })
        }


        const gensalt = await bcrypt.genSalt(10);
        const encryptedpassword = await bcrypt.hash(password, gensalt);
        const user = new userModel({
            name: name,
            email: email,
            mobile: phone,
           })
        user.save(async (err, result) => {
            if (err) {
                console.log(err)
                return res.send({
                    status: 3020,
                    Message: err._message,
                    error: err.errors
                })
            } else {
                return res.send({
                    status: 3023,
                    Message: 'User Edited  Succesfully'
                })
            }
        })


    } catch (err) {
        console.log(err)
        return res.send({
            status: 3002,
            Message: 'User Created Succesfully'
        })
    }

}
