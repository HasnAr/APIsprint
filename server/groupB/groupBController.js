//require the model here
var groupBModel = require('./groupBModel.js');

module.exports ={
	insertBPersons : function (req, res) {

		for(var i=0, personArray = req.body; i< personArray.length; i++){
			console.log(personArray[i])
		var tempBPerson= new groupBModel(personArray[i]);
		tempBPerson.save(function(err){
			if(err) console.log(err);

		})
		res.status(201).send('persons have been add succfully')
	}
	},

	//you have to use the books model to make a new database entry 

	getAllBPersons :function(req, res){
		console.log('getAllBPersons')
		groupBModel.find({}, function(err, persons){
			if(err) console.log(err)
			else{
				console.log(persons);
				res.status(200).json({"data": persons});
			}
		})
	},
	//you need to use params.id to find a books from your database
	getBPerson : function(req, res){
		console.log(req.params.id)
		
		groupBModel.findById(req.params.id, function(err, person){
			if(err) console.log(err)
			else{
				console.log(person);
				res.status(200).json({"data": person});
			}
		})
	}
		
}