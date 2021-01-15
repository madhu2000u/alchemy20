'use strict';

const mongoose = require('mongoose');

const password_change = new mongoose.Schema({
	id: String,
	token: String,
	salt: String,
	user_id: String,
	time: Date,
});

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports = mongoose.model('password_change', password_change);
