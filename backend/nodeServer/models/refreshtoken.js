'use strict';

const mongoose = require('mongoose');

const refreshTokens = new mongoose.Schema({
	refreshToken: String,
});

module.exports = mongoose.model('refershtoken', refreshTokens);
