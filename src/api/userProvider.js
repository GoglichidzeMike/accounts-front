import { axiosRemote as axios } from '../utils/axios';
import { apiBaseUrl } from './host';
import { handleError, handleSuccess } from './handler';

export const getUserById = async (id) => {
	return new Promise((resolve, reject) =>
		axios
			.get(`${apiBaseUrl}/users/${id}`, values)
			.then(handleSuccess(resolve))
			.catch(handleError(reject))
	);
};

export const getUsers = async () => {
	return new Promise((resolve, reject) =>
		axios
			.get(`${apiBaseUrl}/users/`)
			.then(handleSuccess(resolve))
			.catch(handleError(reject))
	);
};
