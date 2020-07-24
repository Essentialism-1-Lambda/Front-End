import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Register from './components/Register';

function App() {
	return (
		<div className='App'>
      <nav>
        <a href='#'>Profile</a>
        <a href='#'>About</a>
        <a href='#'>Login</a>
      </nav>
      <header className='App-header'>
        <h1>Welcome to Essentialism. <br></br> Get more things done with less.</h1> 
        <Link to={'/register'}
          className='register-link'
        >
          Sign Up
        </Link>
      </header>
      <Route path='/register'>
        <Register />
      </Route>
		</div>
	);
}

export default App;
