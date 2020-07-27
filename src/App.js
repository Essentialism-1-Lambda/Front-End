import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import UserLogin from './components/UserLogin';

function App() {
	return (
		<div className='App'>
      <Switch>
        <Route path='/register' component={Register} />
        <Route path='/login'component={UserLogin} />
        <Route exact path='/' component={Home} />
      </Switch>
		</div>
	);
}

export default App;
