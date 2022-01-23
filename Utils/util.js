const userModel = require("../Models/user.model");

exports.emailcheck = (email) => {

    const emailstatus = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    return emailstatus
}


exports.passwordcheck = (password) => {

    const passwordstatus = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z]).{5,}$/.test(email)
    return passwordstatus
}


exports.userExistencecheck = async (email, phone) => {
    const useremailcheck = await userModel.findOne({
        email: email
    });
    const userphonecheck = await userModel.findOne({
        mobile: phone
    });
    const useremailphonecheck = await userModel.findOne({
        email: email,
        mobile: phone
    });
   
    if (useremailcheck) {
        return {
            status: 3099,
            Message: 'Email Already Exits, Please try with Differnt one',
            success: false

        }
    } else if (userphonecheck) {
        return {
            status: 3099,
            Message: 'Phone number Already Exits, Please try with Differnt one',
            success: false

        }
    } else if (useremailphonecheck) {
        return {
            status: 3099,
            Message: 'User Already Exits',
            success: false
        }
    }

}