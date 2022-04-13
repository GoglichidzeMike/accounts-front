import Navigation from './components/Navigation';
import './App.scss';
import ScrollReset from './components/ScrollReset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Signup';
import Account from './views/Account';
import { UserProvider } from '@/context/userContext';
import AuthGuard from './components/AuthGuard';
import { ToastProvider } from 'react-toast-notifications';

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<ToastProvider>
					<ScrollReset>
						<Navigation />
						<Routes>
							<Route path='/login' exact element={<Login />} />
							<Route path='/signup' exact element={<Signup />} />
							<Route element={<AuthGuard />}>
								<Route path='/' element={<Account />} />
								<Route path='/dashboard' element={<Account />} />
							</Route>
						</Routes>
					</ScrollReset>
				</ToastProvider>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
