import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Register from './components/Register';
import Home from './components/Home';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import ValueStepper from './components/Stepper/ValueStepper';

function App() {

  const token = localStorage.getItem('token');
  const [isAuth, setAuth] = useState(token !== '' ? token : null);
  const [user, setUser] = useState(getUserFromToken(token));

	return (
		<div className='App'>
      <Header isAuth={isAuth} setAuth={setAuth} setUser={setUser} />
      <Switch>
        <PrivateRoute path='/dashboard' component={UserDashboard} />
        <PrivateRoute path='/values' component={ValueStepper} />
        <Route path='/register' component={Register} />
        <Route path='/login'component={UserLogin} />
        <Route exact path='/' component={Home} />
      </Switch>
		</div>
	);
}

export default App;
