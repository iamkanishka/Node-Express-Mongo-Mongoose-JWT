const preURL = '/api/user/'
const userController = require('../Controllers/user.controller')
const userMiddleware = require('../Middlewares/user.middleware')
exports.userRoutes = (app) => {
    //     app.post(preURL+'/userRegisteration',userMiddleware.usertokencheck,[
    //    userController.userRegisteration
    //     ])

    app.post(preURL + 'userRegisteration', [
        userController.userRegisteration
    ])
    
    app.post(preURL + 'userSigninwithemailpassword', [
        userController.usersigninwithemailpassword
    ])
}