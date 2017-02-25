//implement model here

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var groupBSchema= new Schema({
	personNickName : String,
	smart: Boolean,
	sprintApi: Boolean,
	age: Number
})


var groupB = mongoose.model('groupB', groupBSchema);


module.exports = groupB;