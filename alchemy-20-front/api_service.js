//import fetch from 'node-fetch'
let axios = require('axios');
const config = process.env.endpoint;
export const ApiService = {
	login: (data) => {
		return axios.default.post(config + '/auth/login', data);
	},
	register: (data) => {
		return axios.default.post(config + '/auth/register', data);
	},
	refreshToken: (headers) => {
		return axios.default.post(config + '/auth/newAccessToken', {
			headers: headers,
		});
	},
	// send event_id, user_id and jwt authorization
	eventRegistration: (headers) => {
		return axios.default.post(config + '/registerEvent', {
			headers: headers,
		});
	},
	profileUpdate: (data) => {
		return axios.default.post(config + '/userdetails', data);
	},
	Dashboard: (headers) => {
		return axios.default.post(config + '/dashboard', {
			headers: headers,
		});
	},
	Logout: (headers) => {
		return axios.default.post(config + '/auth/logout', {
			headers: headers,
		});
	},
	verificationMailResend: (headers) => {
		return axios.default.post(config + '/verify_mail_resend', {
			headers: headers,
		});
	},
	forgotPassword: (headers) => {
		return axios.default.post(
			config + '/forgotPassword',
			{},
			{
				headers: headers,
			}
		);
	},
	resetPassword: (headers) => {
		return axios.default.post(
			config + '/resetPassword',
			{},
			{
				headers: headers,
			}
		);
	},
	selfPing: () => {
		return axios.default.get(
			config + '/check',
			{},
		);
	},
};
