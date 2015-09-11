var express  = require('express');
var app      = express(); 								

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var mongoose = require('mongoose'); 					
 				
var database = require('./config/database'); 			
mongoose.connect(database.url); 	

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
app.use(methodOverride('X-HTTP-Method-Override')); 


require('./app/routes.js')(app);

var port  	 = process.env.PORT || 3000;
app.listen(port);
console.log("Server is listening on port " + port);
