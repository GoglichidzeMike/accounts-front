import './App.scss';
// import ScrollReset from './components/ScrollReset';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Account from './views/Account';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' exact element={<Login />} />
				<Route path='/' exact element={<Account />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
