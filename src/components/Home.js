import React from 'react';
import { Link, useHistory } from 'react-router-dom';
// import axiosWithAuth from '../utils/AxiosWithAuth';
import { UserContext } from '../Context/UserContext';

const Home = () => {
	const history = useHistory();

	return (
		<>
			<UserContext.Consumer>
				{(user) => {
          console.log(history.location.pathname);
					if (user !== null) {
						if (user.values && user.values.length === 0) {
							history.push('/onboarding');
						} else {
							history.push('/dashboard');
						}
					}
				}}
			</UserContext.Consumer>
			<div className='home'>
				<header className='App-header'>
					<h1>Live Happier with Essentialism.</h1>
					<Link to={'/register'} className='register-link'>
						Sign Up
					</Link>
				</header>
			</div>
		</>
	);
};

export default Home;
