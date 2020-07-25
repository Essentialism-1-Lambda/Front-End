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
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/userlogin'>
          <UserLogin />
        </Route>
        <Route exact path='/' component={Home}>
          <Home />
        </Route>
      </Switch> 
		</div>
	);
}

export default App;
