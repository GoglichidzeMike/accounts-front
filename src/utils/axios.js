/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import Cookies from 'js-cookie';

export const axiosRemote = axios.create({
	timeout: 3000,
});

const isUnauthorized = (error) => {
	try {
		return error.response.status === 401;
	} catch (e) {
		return false;
	}
};

const interceptors =
	(axiosInstance) =>
	({ handleUnauthorized, refreshToken }) => {
		axiosInstance.interceptors.request.use((config) => {
			const token = Cookies.get('token');
			if (token) {
				config.headers.Authorization = `Bearer ${token}`;
			}
			return config;
		});

		axiosInstance.interceptors.response.use(
			(response) => {
				return response;
			},
			async (error) => {
				const originalRequest = error.config;
				if (isUnauthorized(error) && !originalRequest._retry) {
					originalRequest._retry = true;
					try {
						const token = await refreshToken();
						originalRequest.headers.Authorization = `Bearer ${token}`;
					} catch (error) {
						handleUnauthorized();
						return Promise.reject(error);
					}
					return axiosRemote(originalRequest);
				}
				return Promise.reject(error);
			}
		);
	};

export const enableInterceptors = interceptors(axiosRemote);
