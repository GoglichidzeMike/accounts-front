import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

import removeAuthTokens from '@/utils/removeAuthTokens';
import { useInitUser } from '@/context/userContext';
import { refreshToken } from '@/api/authProvider';
import { useNavigate } from 'react-router-dom';

const getToken = () => Cookies.get('token');

const AuthGuard = (props) => {
	const { children } = props;
	const { initUser } = useInitUser();

	const [isLoaded, setIsLoaded] = React.useState(false);

	const navigate = useNavigate();

	const redirectToLogin = () => navigate('/login');

	const refreshUser = async () => {
		const refToken = Cookies.get('refreshToken');
		if (refToken) {
			try {
				const tokenResponse = await refreshToken(refToken, 'Mikael');
				initUser(tokenResponse);
			} catch {
				removeAuthTokens();
				redirectToLogin();
			}
		}
	};

	const checkUser = async () => {
		const token = getToken();
		if (token) {
			await refreshUser();
		} else {
			redirectToLogin();
		}
		if (!isLoaded) setIsLoaded(true);
	};

	useEffect(() => {
		checkUser();
	}, []);

	return <>{isLoaded && children}</>;
};

AuthGuard.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthGuard;
