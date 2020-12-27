let axios = require('axios');
let config = 'http://localhost:4700/api';

export const ApiService = {
	login: (data) => {
		return axios.default.post(config + '/auth/login', data);
	},
	register: (data) => {
		return axios.default.post(config + '/auth/register', data);
	},
};
