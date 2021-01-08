let axios = require('axios');
let config = process.env.endpoint;

export const ApiService = {
	login: (data) => {
		return axios.default.post(config + '/auth/login', data);
	},
	register: (data) => {
		return axios.default.post(config + '/auth/register', data);
	},
};
