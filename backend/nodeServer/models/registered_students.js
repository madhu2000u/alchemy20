const mongoose = require('mongoose');

const RegisteredEventSchema = new mongoose.Schema({
	user_id: {type: mongoose.Schema.Types.ObjectId, required: true},
	events: [{type: mongoose.Schema.Types.ObjectId, ref: 'events'}],
});

module.exports = mongoose.model('registered_event', RegisteredEventSchema);
