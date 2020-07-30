import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserConsumer } from '../Context/UserContext';

const Home = () => {
	const history = useHistory();

	return (
		<>
			<UserConsumer>
				{(user) => {
					if (user !== null) {
						if (user.values && user.values.length === 0) {
							history.push('/onboarding');
						} else {
							history.push('/dashboard');
						}
					}
				}}
			</UserConsumer>
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
