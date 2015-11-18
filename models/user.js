var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema,
	bcrypt 		= require('bcrypt-node'),
	userSchema  = new Schema({
		name: String,
		email: {type: String, required: true},
		password: {type: String, required: true}
	})

module.exports = mongoose.model('User', userSchema)