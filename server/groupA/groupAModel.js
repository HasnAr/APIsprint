var mongoose = require('mongoose');

var groupASchema = new mongoose.Schema({
	name: String,
	stupidity: Boolean,
	theisesProject: String,
	team: []
});

var groupA = mongoose.model('groupA', groupASchema);

module.exports = groupA; 