var mongoose 	= require('mongoose'),
	Schema 		= mongoose.Schema,
	bcrypt 		= require('bcrypt'),
	userSchema  = new Schema({
		name: String,
		email: {type: String, required: true},
		password: {type: String, required: true}
	})

userSchema.pre('save', function(next) {
	var user = this,
		hash = bcrypt.hashSync(user.password, 8)
	user.password = hash
	next()
})

var User = mongoose.model('User', userSchema)

module.exports = User