var express = require('express');
var mongoose = require('mongoose');
var app = express();

app.use(express.static('../Client/'))

// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/gratitude');

// configure our server with all routing
require('./Config/router.js')(app, express);

// start listening to requests on port 8000
app.listen(8000, function() {
	console.log('listening on 8000')
});

// export our app for testing and flexibility, required by index.js
module.exports = app;
