import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../api/authProvider';
import { useInitUser } from '@/context/userContext';
import { SignUpForm } from './Components/SignupForm';
import Cookies from 'js-cookie';
import { useToasts } from 'react-toast-notifications';
import { messages } from '@/utils/messages';

const Signup = () => {
	const { initUser } = useInitUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (Cookies.get('token')) {
			navigate('/account');
		}
	}, []);

	// handle toasts
	const { addToast, removeAllToasts } = useToasts();

	const createToast = (message, type) => {
		removeAllToasts();
		addToast(message, {
			appearance: type,
			autoDismiss: true,
			autoDismissTimeout: 3000,
		});
	};
	// end handling toats

	const signUp = async (values) => {
		try {
			const res = await register(values);
			const { signUpResult, token, refreshToken } = res;
			console.log('register response', res);
			if (signUpResult.succeeded) {
				initUser({ token, refreshToken });
				createToast(messages.SucessFullyRegistered, 'success');
				return navigate('/account');
			} else {
				createToast(messages.ErrorOccured, 'warning');
				alert('try again');
			}
		} catch (err) {
			createToast(messages.ErrorOccured, 'warning');
			console.log(err);
		}
	};

	return (
		<div className='w-full flex-col flex items-center justify-center h-screen'>
			<SignUpForm signUp={signUp} />
			<div
				className='py-2 rounded border border-gray-400 text-center
					bg-blue-300 px-2 my-2 w-72
					text-white'
			>
				<Link to='/account'>Acocunt page</Link>
				<Link to='/login'>Login page</Link>
			</div>
		</div>
	);
};

export default Signup;