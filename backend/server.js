// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var json2xls = require('json2xls');
var autoIncrement = require('mongoose-auto-increment');

mongoose.Promise = global.Promise;

// MongoDB
var uri = process.env.MONGODB_URI || 'mongodb://localhost/hackathon2'

var connection = mongoose.connect(uri);
autoIncrement.initialize(connection);

// Express
var app = express();

app.use(bodyParser.json({limit: '50mb'}));
// app.use(app.bodyParser());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cors());
app.use(json2xls.middleware);

// Routes
app.use('/api', require('./routes/api'));


//app.all('/api/*', require('./middlewares/validateRequest'));

// Start server
var port = process.env.PORT || 5000;
app.listen(port);
console.log('API is running on port ' + port);
