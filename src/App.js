import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import './App.css';

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
import {registerStub, valuesStub} from './DataStubs/data';

function App() {
  //const token = localStorage.getItem('token');
	//const [isAuth, setAuth] = useState(token !== '' ? token : null);
	const [isAuth, setAuth] = useState(
		registerStub !== null ? registerStub : null
	);
	//const [user, setUser] = useState(getUserFromToken(token));
  const [user, setUser] = useState(registerStub);
  const [values, setValues] = useState(valuesStub);

  const handleValueChange = (input) => (event) =>
  setValues({
			...user.values,
			[input]: event.target.value,
		});

	return (
		<div className='App'>
			<Switch>
				<UserProvider value={{ user, isAuth, setAuth, setUser }}>
					<Header />
					<PrivateRoute path='/dashboard' component={UserDashboard} />
        <ValueProvider value={{values, handleValueChange}} >
					<PrivateRoute path='/onboarding' component={ValueStepper} />
        </ValueProvider>
					<Route path='/register' component={Register} />
					<Route path='/login' component={UserLogin} />
					<Route exact path='/' component={Home} />
				</UserProvider>
			</Switch>
		</div>
	);
}

export default App;
