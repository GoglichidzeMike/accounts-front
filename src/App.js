import './App.scss';
// import ScrollReset from './components/ScrollReset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Account from './views/Account';
import { UserProvider } from '@/context/userContext';

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<Routes>
					<Route path='/login' exact element={<Login />} />
					<Route path='/account' exact element={<Account />} />
				</Routes>
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
