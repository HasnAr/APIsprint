//require files here
var groupAModel = require('./groupAModel.js');
 

module.exports ={
	insertAPersons : function (req, res) {
for(var i=0, personArray = req.body; i< personArray.length; i++){
			console.log(personArray[i])
		var tempAPerson= new groupAModel(personArray[i]);
		tempAPerson.save(function(err){
			if(err) console.log(err);
		})
			res.status(201).send('persons have been add succfully');	
		}
	},

	//you have to use the books model to make a new database entry 

	getAllAPersons :function(req, res){
		groupAModel.find({}, function(err, persons){
			if(err) console.log(err)
			else{
				console.log(persons);
				res.status(200).json({"data": persons});
			}
		})
	},
	//you need to use params.id to find a books from your database
	getAPerson : function(req, res){
		console.log('getAPerson')
		groupAModel.findById(req.params.id, function(err, person){
			if(err) console.log(err)
			else{
				console.log(person);
				res.status(200).json({"data": person});
			}
		})
	}
	
}