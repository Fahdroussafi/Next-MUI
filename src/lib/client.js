import axios from 'axios';
import JWTToken from './token';
import { API_URL } from './globals';

const client = axios.create({
	baseURL: API_URL,
});



client.interceptors.request.use(
	function (config) {
		// Do something before request is sent
		const token = JWTToken.getToken();

		if (token) {
			config.headers['Authorization'] = token;
		}

		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export default client;