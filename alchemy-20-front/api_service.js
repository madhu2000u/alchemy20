//import fetch from 'node-fetch'
let axios = require('axios');

export const ApiService = {
	login: (data, config) => {
		return axios.default.post(config + '/auth/login', data);
	},
	register: (data, config) => {
		return axios.default.post(config + '/auth/register', data);
	},
	refreshToken: (data, config) => {
		return axios.default.post(config + '/auth/newAccessToken', data);
	},
	// send event_id, user_id and jwt authorization
	eventRegistration: (headers, config) => {
		return axios.default.post(config + '/registerEvent', {
			headers: headers,
		});
	},
};
