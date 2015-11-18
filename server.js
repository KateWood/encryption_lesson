var express 	= require('express'),
	app			= express(),
	port 		= process.env.PORT || 3000,
	logger		= require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	apiRouter	= require('./routes/api_routes.js')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('mongodb://localhost/encryption_lesson', function() {
	console.log('Mongodb connected to db:encryption_lesson')
})