var User = require('../models/user.js')

function create(req, res) {
	var user = new User(req.body.user)
	user.save(function(err) {
		if (err) {
			res.json({err: err})
		} else {
			res.json({message: 'User created'})
		}
	})
}

function show(req, res) {
	User.findById(req.params.id, function(err, user) {
		if (err) {
			res.json({err: err})
		} else {
			res.json(user)
		}
	})
}

module.exports = {
	create: create,
	show: show
}