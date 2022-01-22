const preURL = '/api'
const userController = require('../Controllers/user.controller')
exports.userRoutes = (app) => {
    app.post(preURL+'/createUser',[
   userController.createUser
    ])
}