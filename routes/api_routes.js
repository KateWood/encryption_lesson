var usersController = require('../controllers/users_controller'),
	express 		= require('express'),
	apiRouter 		= express.Router()

apiRouter.route('/users')
	.post(usersController.create)

apiRouter.route('/users/:id')
	.get(usersController.show)

apiRouter.route('/signin')
	.post(usersController.signIn)

module.exports = apiRouter