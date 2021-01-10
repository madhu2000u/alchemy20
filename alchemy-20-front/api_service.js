//import fetch from 'node-fetch'
let axios = require('axios');

export const ApiService = {
	login: (data, config) => {
		return axios.default.post(config + '/auth/login', data);
	},
	register: (data, config) => {
		return axios.default.post(config + '/auth/register', data);
	},
	refreshToken : (data) => {
		return axios.default.post(process.env.endpoint + '/auth/newAccessToken', data);
	}
};
