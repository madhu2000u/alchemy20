'use strict';

const mongoose = require('mongoose');

const eventsSchema = new mongoose.Schema({
	event_type: String,
	event_name: String,
	event_description: String,
	event_details: String, //rules and guidelines of event
	event_gform: String, //gform link to submit work
	event_img: String,
	event_date: String,
	event_cost: String,
	is_active: Boolean,
	reg_over: Boolean,
	is_team_event: Boolean,
	team_registration: String, //gform link to register the team
	problem_statement: String,
	event_contacts: [String],
	payment_details: String
});

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports = mongoose.model('events', eventsSchema);
