import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const SignUpForm = (props) => {
	const { signUp } = props;
	const [form, setForm] = useState({
		username: '',
		password: '',
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		await signUp({
			username: form.username,
			password: form.password,
		});
	};
	const onChange = ({ target: { value, name } }) => {
		setForm({ ...form, [name]: value });
	};
	return (
		<div className='mx-auto w-72 border border-gray-400 shadow rounded p-4'>
			<p className='text-center font-bold'>Sign Up</p>
			<div className='flex flex-col my-2'>
				<label htmlFor='username' className='text-gray-700'>
					Username
				</label>
				<input
					type='text'
					name='username'
					className='p-1 border  rounded border-gray-400'
					onChange={onChange}
					value={form.username || ''}
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
					onChange={onChange}
					value={form.password || ''}
				/>
			</div>
			<div className='flex justify-center my-1 text-white font-bold'>
				<button
					className='px-2 py-1 bg-green-300 rounded'
					onClick={handleSubmit}
				>
					Register
				</button>
			</div>
		</div>
	);
};

SignUpForm.propTypes = {
	signUp: PropTypes.func.isRequired,
};
