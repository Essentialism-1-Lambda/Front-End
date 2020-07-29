import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home'>
      <div className='nav'> 
        <Link to={'/login'} 
          className='userlogin-link'
        >
          Login
        </Link>
        <Link to={`https://essentialism-1-lambda.github.io/Marketing/`}>
          About Us
        </Link>
      </div>
      <header className="App-header">
        <h1>Live Happier with Essentialism.</h1> 
        <Link to={'/register'}
          className='register-link'
        >
          Sign Up
        </Link>
      </header>
    </div>
  )
}

export default Home;