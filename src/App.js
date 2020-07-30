import React, {useState} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import getUserFromToken from './utils/GetUserFromToken';
import PrivateRoute from './utils/PrivateRoute';
import ValueStepper from './components/Stepper/ValueStepper';
import Header from './components/Nav/Header';
import UserDashboard from './components/UserDashboard';

function App() {

  const token = localStorage.getItem('token');
  const [isAuth, setAuth] = useState(token !== '' ? token : null);
  const [user, setUser] = useState(getUserFromToken(token));

	return (
		<div className='App'>
      <Header isAuth={isAuth} setAuth={setAuth} setUser={setUser} />
      <Switch>
        <PrivateRoute path='/dashboard' component={UserDashboard} />
        <PrivateRoute path='/values' componenet={ValueStepper} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={UserLogin} />
        <Route exact path='/' component={Home} />
      </Switch>
		</div>
	);
}

export default App;
