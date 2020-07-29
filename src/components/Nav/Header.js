import React from 'react';
import { useHistory } from 'react-router-dom';

export const Header = () => {
	const history = useHistory();

	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem('token');
		window.location.reload(false);
		history.push('/');
  };

  const goToPage = (page) => history.push(`/${page}`);



};
