import React from 'react';
import Cookies from 'js-cookie';
import { enableInterceptors } from '@/utils/axios';
import { refreshToken } from '@/api/authProvider';
import parseJwt from '@/utils/parseJWT';
import removeAuthTokens from '@/utils/removeAuthTokens';
// import useRouter from '@/utils/useRouter';
import setAuthTokens from '@/utils/setAuthTokens';

const UserContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
	const [user, setUser] = React.useState({});

	const value = { user, setUser };

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
	const context = React.useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider');
	}
	return context;
};

export const useInitUser = () => {
	const { setUser } = useUser();

	// const router = useRouter();

	const handleUnauthorizedRequest = () => {
		removeAuthTokens();
		router.history.push('/auth/login');
		//  logout
	};

	const refreshTokenWrapper = async () => {
		const tokenResponse = await refreshToken(Cookies.get('refreshToken'));
		setAuthTokens(tokenResponse.token, tokenResponse.refreshToken);
		setUser(parseJwt(tokenResponse.token));
		return tokenResponse.token;
	};

	const initUser = (tokenResponse) => {
		setAuthTokens(tokenResponse.token, tokenResponse.refreshToken);
		setUser(parseJwt(tokenResponse.token));
		enableInterceptors({
			handleUnauthorized: handleUnauthorizedRequest,
			refreshToken: refreshTokenWrapper,
		});
	};

	return { initUser };
};
