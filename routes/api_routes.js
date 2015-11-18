var usersController = require('../controllers/users_controller'),
	express 		= require('express'),
	apiRouter 		= express.Router()

apiRouter.route('/users')
	.post(usersController.create)

module.exports = apiRouter