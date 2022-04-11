import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authProvider';
import { useInitUser } from '@/context/userContext';
import { LoginForm } from './Components/LoginForm';

const Login = () => {
	const { initUser } = useInitUser();
	const navigate = useNavigate();

	const login = async (values) => {
		try {
			const res = await loginUser(values);
			const { signInResult, token, refreshToken } = res;
			console.log(res);
			if (signInResult.succeeded) {
				initUser({ token, refreshToken });
				return navigate('/account');
			} else {
				alert('try again');
			}
		} catch (err) {
			alert('error');
			console.log(err);
		}
	};

	return (
		<div className='w-full flex-col flex items-center justify-center h-screen'>
			<LoginForm login={login} />
			<div
				className='py-2 rounded border border-gray-400 text-center
					bg-blue-300 px-2 my-2 w-72
					text-white'
			>
				<Link to='/'>Acocunt page</Link>
			</div>
		</div>
	);
};

export default Login;
