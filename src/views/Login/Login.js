import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../api/authProvider';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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
				router.history.push('/');
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
		const res = await login({
			username: username,
			password,
		});
		const { userId, token, refreshToken } = res;
		console.log(res);
		console.log(userId, token, refreshToken);
	};

	return (
		<div className='w-full flex-col flex items-center justify-center h-screen'>
			<div className='mx-auto w-72 border border-gray-400 shadow rounded p-4'>
				<p className='text-center font-bold'>Login</p>
				<div className='flex flex-col my-2'>
					<label htmlFor='username' className='text-gray-700'>
						Username
					</label>
					<input
						type='text'
						name='username'
						className='p-1 border  rounded border-gray-400'
						onChange={handleUsername}
						value={username}
					/>
				</div>
				<div className='flex flex-col my-2'>
					<label htmlFor='password' className='text-gray-700'>
						Password
					</label>
					<input
						type='password'
						name='password'
						className='p-1 border  rounded border-gray-400'
						onChange={handlePassword}
						value={password}
					/>
				</div>
				<div className='flex justify-center my-1 text-white font-bold'>
					<button
						className='px-2 py-1 bg-green-300 rounded'
						onClick={handleSubmit}
					>
						Login
					</button>
				</div>
			</div>
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
