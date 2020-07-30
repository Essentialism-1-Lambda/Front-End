import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
//import getUserFromToken from './utils/GetUserFromToken';
import PrivateRoute from './utils/PrivateRoute';
import ValueStepper from './components/Stepper/ValueStepper';
import Header from './components/Nav/Header';
import UserDashboard from './components/UserDashboard';

import { UserProvider } from './Context/UserContext';

function App() {
	// const token = localStorage.getItem('token');
	const registerStub = {
		id: 99,
		name: 'Test User',
		email: 'test@test.com',
		values: [1, 2, 3],
		projects: [],
		topValues: {},
	};
	//const [isAuth, setAuth] = useState(token !== '' ? token : null);
	const [isAuth, setAuth] = useState(
		registerStub !== null ? registerStub : null
	);
	//const [user, setUser] = useState(getUserFromToken(token));
	const [user, setUser] = useState(registerStub);

	return (
		<div className='App'>
			<Switch>
				<UserProvider value={{ user, isAuth, setAuth }}>
					<Header setUser={setUser}  />
					<PrivateRoute path='/dashboard' component={UserDashboard} />
					<PrivateRoute path='/onboarding' componenet={ValueStepper} />
					<Route path='/register' component={Register} />
					<Route path='/login' component={UserLogin} />
					<Route exact path='/' component={Home} />
				</UserProvider>
			</Switch>
		</div>
	);
}

export default App;
