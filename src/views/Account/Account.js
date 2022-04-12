import { useUser } from '@/context/userContext';
import removeAuthTokens from '@/utils/removeAuthTokens';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
	const navigate = useNavigate();
	const { setUser } = useUser();

	const handleLogout = () => {
		navigate('/login');
		removeAuthTokens();
		setUser({});
	};
	return (
		<div>
			<p>account</p>
			<Link to='/login'>Login page</Link>
			<button onClick={handleLogout}>Log out</button>
		</div>
	);
};

export default Account;
