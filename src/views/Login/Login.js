import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authProvider';
import { useInitUser } from '@/context/userContext';
import { LoginForm } from './Components/LoginForm';

const Login = () => {
	const [username, setUsername] = useState('Mikael');
	const [password, setPassword] = useState('Mik%00412855');
	const { initUser } = useInitUser();
	const navigate = useNavigate();

	const handleUsername = (e) => {
		console.log(e.target.value);
		setUsername(e.target.value);
	};
	const handlePassword = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};

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
	const handleSubmit = async (event) => {
		event.preventDefault();
		await login({
			username,
			password,
		});
	};

	return (
		<div className='w-full flex-col flex items-center justify-center h-screen'>
			<LoginForm
				handleUsername={handleUsername}
				username={username}
				handlePassword={handlePassword}
				password={password}
				handleSubmit={handleSubmit}
			/>
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
