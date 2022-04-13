import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '@/context/userContext';
import removeAuthTokens from '@/utils/removeAuthTokens';

const Navigation = () => {
	const { user, setUser } = useUser();
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate('/login');
		removeAuthTokens();
		setUser({});
	};
	return (
		<nav className='w-100 bg-accent text-light shadow-md'>
			<div className='container flex items-center py-3 justify-between'>
				<div className=''>
					<Link to='/'>Home</Link>
				</div>
				<div className=''>
					<Link to='/users' className='mr-2 p-1'>
						Users
					</Link>
					<Link to='/' className='mr-2 p-1'>
						Phones & Accounts
					</Link>
					{user.username && (
						<a onClick={handleLogout} className='p-1 cursor-pointer'>
							Logout
						</a>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
