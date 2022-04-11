import PropTypes from 'prop-types';
import React from 'react';

export const LoginForm = (props) => {
	const { handleUsername, username, handlePassword, password, handleSubmit } =
		props;

	return (
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
	);
};

LoginForm.propTypes = {
	handleUsername: PropTypes.func.isRequired,
	handlePassword: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
};
