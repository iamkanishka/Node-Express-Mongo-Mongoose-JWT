const preURL = '/api/admin/'
const adminController = require('../Controllers/admin.controller')
exports.adminRoutes = (app) => {
    app.post(preURL + 'createUser', [
        adminController.createUser
    ])
    app.post(preURL + 'editUser', [
        adminController.createUser
    ])
    app.get(preURL + 'getUser', [
        adminController.createUser
    ])
    app.post(preURL + 'deleteUser', [
        adminController.createUser
    ])
    app.post(preURL + 'asignRolestoUser', [
        adminController.createUser
    ])
    
}