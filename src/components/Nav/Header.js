import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { UserContext } from '../../Context/UserContext';

export const Header = () => {
	const history = useHistory();
	const { isAuth, setAuth, setUser } = useContext(UserContext);

	const logout = (e) => {
		e.preventDefault();
		setAuth(null);
		setUser({});
		localStorage.removeItem('token');
		window.location.reload(false);
		history.push('/');
	};

	return (
		<div className='nav-bar'>
			{isAuth ? (
				<>
					{(user) => {
						if (user !== null) {
							if (user.values && user.values.length === 0) {
								history.push('/onboarding');
							} else {
								history.push('/dashboard');
							}
						}
					}}
					<section className='private-nav'>
						<div className='links'>
							<Link className='userlogin-link' to={'/dashboard'}>
								Dashboard
							</Link>
							<Link className='userlogin-link' to={'/onboarding'}>
								Change Values
							</Link>
							<Link
								className='userlogin-link'
								to={{
									pathname: 'https:/essentialism-1-lambda.github.io/Marketing/',
								}}
								target='_blank'>
								About Us
							</Link>
							<Button color='primary' type='submit' onClick={logout}>
								Log Out
							</Button>
						</div>
					</section>
				</>
			) : (
				<section className='public-nav'>
					<Link className='userlogin-link' to={'/'}>
						Home
					</Link>
					<Link className='userlogin-link' to={'/login'}>
						Login
					</Link>
					<Link
						className='userlogin-link'
						to={{
							pathname: 'https:/essentialism-1-lambda.github.io/Marketing/',
						}}
						target='_blank'>
						About Us
					</Link>
				</section>
			)}
		</div>
	);
};
export default Header;
