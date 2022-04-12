import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/authProvider';
import { useInitUser } from '@/context/userContext';
import { LoginForm } from './Components/LoginForm';
import Cookies from 'js-cookie';
import { useToasts } from 'react-toast-notifications';
import { messages } from '@/utils/messages';

const Login = () => {
	const { initUser } = useInitUser();
	const navigate = useNavigate();

	useEffect(() => {
		if (Cookies.get('token')) {
			navigate('/');
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

	const login = async (values) => {
		try {
			const res = await loginUser(values);
			const { signInResult, token, refreshToken } = res;
			console.log(res);
			if (signInResult.succeeded) {
				initUser({ token, refreshToken });
				createToast(messages.SuccessFullyLoggedIn, 'success');
				return navigate('/');
			} else {
				createToast(messages.IncorrectCredentials, 'warning');
				alert('try again');
			}
		} catch (err) {
			createToast(messages.IncorrectCredentials, 'warning');
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
			<p>
				Don&apos;t have an acocunt?
				<Link to='/signup' className='ml-1 underline'>
					Sign up here
				</Link>
			</p>
		</div>
	);
};

export default Login;
