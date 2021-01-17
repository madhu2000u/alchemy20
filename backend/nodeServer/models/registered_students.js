const mongoose = require('mongoose');

const RegisteredEventSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId, required: true},
	events: [{type: mongoose.Schema.Types.ObjectId, ref: 'events'}],

	// event_reg:[
	// 	{
	// 		event_id: {type: mongoose.Schema.Types.ObjectId, required: true},
	// 		team_members:[String]			//as of now if values of string is "non-team" it is a non-team event that the user has registerd. at later stages this has to be migrated to a better option - maybe a new modle for single member event
	// 	}
	// ]
});

module.exports = mongoose.model('registered_event', RegisteredEventSchema);
