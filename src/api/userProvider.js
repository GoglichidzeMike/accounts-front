import { axiosRemote as axios } from '../utils/axios';
import { apiBaseUrl } from './host';
import { handleError, handleSuccess } from './handler';

export const getUsers = async (id) => {
	return new Promise((resolve, reject) =>
		axios
			.post(`${apiBaseUrl}/users/${id}`, values)
			.then(handleSuccess(resolve))
			.catch(handleError(reject))
	);
};

export const getUserById = async () => {
	return new Promise((resolve, reject) =>
		axios
			.post(`${apiBaseUrl}/users/`, values)
			.then(handleSuccess(resolve))
			.catch(handleError(reject))
	);
};
