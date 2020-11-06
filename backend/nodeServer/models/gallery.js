'use strict'; //This is for the sliding gallery in home page

const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
	image_url: String,
	image_desc: String,
	is_sliding: Boolean,
});

//mongoose.connect('mongodb://localhost:27017/alchemy-20-db', ({useNewUrlParser:true, useUnifiedTopology:true})).then(()=>{console.log('Connected to notific alchemy db')}).catch((err)=>{console.log('Error connection to db - ', err)})

module.exports = mongoose.model('gallery', gallerySchema);
