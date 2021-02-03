'use strict';

const mongoose = require('mongoose');

const PosterSchema = new mongoose.Schema({
	image: {
		type: String,
		required: true,
	},
	alt: {
		type: String,
		required: true,
	},
	report: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model('Poster', PosterSchema);
