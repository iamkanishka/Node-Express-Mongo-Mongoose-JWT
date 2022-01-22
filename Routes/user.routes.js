const preURL = '/api'
const userController = require('../Controllers/user.controller')
const userMiddleware = require('../Middlewares/user.middleware')
exports.userRoutes = (app) => {
    app.post(preURL+'/userRegisteration',userMiddleware.usertokencheck,[
   userController.userRegisteration
    ])
}