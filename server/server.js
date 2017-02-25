//require express and mongoose here
var express = require('express');
var mongoose = require('mongoose')

//require your middleware and routes here
var app = express();

require('./config/routes.js')(app, express);
require('./config/middleware.js')(app, express);

//=============================================================================
/*									Database								 */
//=============================================================================


	//here you will have to connect to your mongo database, 
	//set the port number and console log something so that 
	//you know that the mongodb is connected
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/groupsDB', function(error){
	if(error)
		console.log(error);
	else 
		console.log('mongodb is connected');

});

//=============================================================================
/*									Server   								 */
//=============================================================================

//set express to listen to for requests or certain port
app.listen(3000, function(){
	console.log('server listen on port 3000');
})



module.exports=  app//some thing;