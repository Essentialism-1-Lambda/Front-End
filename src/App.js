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

import {UserProvider} from './Context/UserContext';
import {ValueProvider} from './Context/ValueContext';
import {registerStub, onboardedUserStub, values, userData} from './DataStubs/data';

function App() {
  const token = localStorage.getItem('token');
	//const [isAuth, setAuth] = useState(token !== '' ? token : null);
	const setCorrectUser = (tokenVal) => {
		switch(tokenVal) {
			case 'registerStub':
				return registerStub;
			case 'onboardedUserStub':
				return onboardedUserStub;
			case 'completeUserStub':
				return userData;
			default:
				return null;
		}
	}

	// To Simulate API response for login
	const [isAuth, setAuth] = useState(setCorrectUser(token));
	const [user, setUser] = useState(setCorrectUser(token));
	console.log(user);
	// const [isAuth, setAuth] = useState(
	// 	registerStub !== null ? registerStub : null
	// );
	//const [user, setUser] = useState(getUserFromToken(token));
  // const [user, setUser] = useState(registerStub);
  const [value, setValue] = useState(values);

  const handleValueChange = (input) => (event) =>
  setValue({
			...user.value,
			[input]: event.target.value,
		});

	return (
		<div className='App'>
			<Switch>
				<UserProvider value={{ user, isAuth, setAuth, setUser }}>
					<Header />
					<PrivateRoute path='/dashboard' component={UserDashboard} />
        <ValueProvider value={{value, handleValueChange}} >
					<PrivateRoute path='/onboarding' component={ValueStepper} />
        </ValueProvider>
				</UserProvider>
				</Switch>
					<Route path='/register' component={Register} />
					<Route path='/login' component={UserLogin} />
					<Route exact path='/' component={Home} />
		</div>
	);
}

export default App;