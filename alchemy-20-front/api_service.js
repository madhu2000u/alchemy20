//import fetch from 'node-fetch'

let axios = require('axios');
let config = process.env.get_api_key
console.log("localhost api.service.js - ", config)

export const ApiService = {
	login: (data) => {
		console.log("localhost front end login - ", config)
		return axios.default.post(config + '/auth/login', data);
	},
	register: (data) => {
		console.log("localhost front end register - ", config)
		return axios.default.post(config + '/auth/register', data);
	},
};
