const User = require('../models/users');

exports.AddUserDetails = (req, res) => {
	console.log('Inside user details controller req - ', req.user, req.body);
	const body = req.body;

	if (!body.name || !body.mobile || !body.college || !body.dept || !body.year_of_study) {
		res.status(401).json({message: 'Required fields missing'});
	}

	User.findOne({_id: req.user.id}).then((result) => {
		if (!result) {
			res.status(403).json({message: "Invalid auth token or user doesn't exist. Please login again"});
		} else if (result.mobile) {
			console.log(result.mobile);
			res.status(409).json({message: 'Already filled'});
		} else {
			User.updateOne({_id: req.user.id}, body)
				.then((result) => {
					console.log('AddUserDetails result: ' + result);
					res.sendStatus(200);
				})
				.catch((err) => {
					res.status(401).json({error: err});
				});
		}
	});
};

exports.checkUserDetails = (req, res, next) => {
	User.findOne({_id: req.user.id}).then((result) => {
		if (!result) {
			res.status(403).json({message: "Invalid auth token or user doesn't exist. Please login again"});
		} else if (result.mobile) {
			console.log(result.mobile);
			next();
		} else {
			res.status(404).json({message: 'Fill details before event/workshop registration'});
		}
	});
};

exports.getAllUsers = (req, res) => {
	User.find({}, '-hashed_password -_id -__v')
		.then((users) => {
			res.send(users);
		})
		.catch((err) => {
			console.log(err);
		});
};

exports.getListofField=async(req, res)=>{
	/* TODO Currently, email is enough for us as Alchemy is going to get over in 2 days, 
	but later should be implemted for general use case
	if(!req.headers['field']) {return res.status(403).json({message:"Field that you require is not specified"})}
	*/
	const l=await User.distinct("email", (err, res)=>{		//email to be replaced with req.field if generalized
		if(err) return console.log("getListofField Error: ", err)

	})
	
	return res.status(200).json({list:l})

	//console.log("list of emails - ", list)
}

// exports.checkTeamDetails = (req,res) => {
// 	const body = req.body
// 	if(!body){return res.status(400).json({message: 'Missing requred fields'})}
// 	if(!req.headers['event_id']){return res.status(400).json({message: 'Missing event_id field'})}
// 	User.findOne({_id: req.user.id}).then((result) => {
// 		if (!result) {
// 			return res.status(403).json({message: "Invalid auth token or user doesn't exist. Please login again"});
// 		}
// 		next();
// 	});

// }
