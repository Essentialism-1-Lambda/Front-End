import React from 'react';
import { Link } from 'react-router-dom';
// import Header from './Nav/Header';

const Home = () => {
  return (
    <div className='home'>
      <div className='nav'>

        {/* <Header /> */}
        {/* plan to move links into header */}
        <Link to={'/login'}
          className='userlogin-link'
        >
          Login
        </Link>
        <a href={`https://essentialism-1-lambda.github.io/Marketing/`}>
          About Us
        </a>
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