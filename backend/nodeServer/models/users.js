'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	//_id is created automatically by mongoose
	alc_id: {type: String, required: true, unique: true},
	email: {type: String, required: true, unique: true},
	google_id: {type: String, unique: true},
	profile_pic: String,
	hashed_password: String,
	name: String,
	mobile: String,
	college: String,
	dept: String,
	year_of_study: String,
	accommodation: Boolean,
	acc_active: Boolean,
	registered_events: [String],
});

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to users alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports = mongoose.model('users', userSchema);
