import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserConsumer } from '../Context/UserContext';



const PrivateRoute = ({ component: Component, ...rest }) => (
	<UserConsumer>
		{({ isAuth }) => (
			<Route
        render={(props) => isAuth ? <Component {...props} /> : <Redirect to={`/login`} />}
      {...rest}
			/>
		)}
	</UserConsumer>
);

export default PrivateRoute;