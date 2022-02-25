const preURL = '/api/admin/'
const adminController = require('../Controllers/admin.controller')
const adminMiddleware = require('../Middlewares/admin.middleware')
const generalMiddleware = require('../Middlewares/general.middleware')



exports.adminRoutes = (app) => {
    app.post(preURL + 'createUser', generalMiddleware.apptokencheck, adminMiddleware.usertokencheck, [
        adminController.createUser
    ])
    // app.post(preURL + 'editUser', generalMiddleware.apptokencheck, adminMiddleware.usertokencheck, [
    //     adminController.createUser
    // ])
    // app.get(preURL + 'getUser', generalMiddleware.apptokencheck, adminMiddleware.usertokencheck, [
    //     adminController.createUser
    // ])
    // app.post(preURL + 'deleteUser', generalMiddleware.apptokencheck, adminMiddleware.usertokencheck, [
    //     adminController.createUser
    // ])
    // app.post(preURL + 'asignRolestoUser', generalMiddleware.apptokencheck, adminMiddleware.usertokencheck, [
    //     adminController.createUser
    // ])
    
}