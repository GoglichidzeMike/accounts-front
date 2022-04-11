import { axiosRemote as axios } from '../utils/axios';
import { apiBaseUrl } from './host';
import { handleError, handleSuccess } from './handler';

export const loginUser = async (values) => {
	return new Promise((resolve, reject) =>
		axios
			.post(`${apiBaseUrl}/auth/login`, values)
			.then(handleSuccess(resolve))
			.catch(handleError(reject))
	);
};

export const register = async (values) => {
	return new Promise((resolve, reject) =>
		axios
			.post(`${apiBaseUrl}/auth/signup`, values)
			.then(handleSuccess(resolve))
			.catch(handleError(reject))
	);
};

export const refreshToken = async (refreshtoken, username) => {
	const payLoad = {
		refreshtoken,
		username,
	};
	return new Promise((resolve, reject) =>
		axios
			.post(`${apiBaseUrl}/auth/refreshtoken`, payLoad)
			.then(handleSuccess(resolve))
			.catch(handleError(reject))
	);
};
