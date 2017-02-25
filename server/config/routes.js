//you need to require some files here
var express = require('express')
var groupA = require('./../groupA/groupAController.js')
var groupB = require('./../groupB/groupBController.js')
var app= require('./../server.js')



module.exports = function (app, express) {

//=============================================================================
/*								movie route									 */
//=============================================================================
	app.get('/api/groupA/getAll', groupA.getAllAPersons);
	app.post('/api/groupA/insterPersons', groupA.insertAPersons);
	app.get('/api/groupA/:id', groupA.getAPerson);

	//here you have to add two more routes
	
//=============================================================================
/*								book route									 */
//=============================================================================
	app.get('/api/groupB/getAll', groupB.getAllBPersons);
	app.post('/api/groupB/insterPersons', groupB.insertBPersons);
	app.get('/api/groupB/:id', groupB.getBPerson);
	//here you have to add two more routes

};

