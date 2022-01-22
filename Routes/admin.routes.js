const preURL = '/api'
const adminController = require('../Controllers/admin.controller')
exports.adminRoutes = (app) => {
    app.post(preURL + '/createUser', [
        adminController.createUser
    ])
}