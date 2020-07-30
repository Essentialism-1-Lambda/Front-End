import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

export const Header = (props) => {
  const history = useHistory();
  const { isAuth, setAuth, setUser } = props;

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload(false);
    history.push('/');
  };

  return (
    <div className='nav-bar'>
      {isAuth ? (
        <>
          <section className='private-nav'>
            <div className='links'>
              <Link className="userlogin-link" href="/dashboard">
                Dashboard
              </Link>
              <Link className="userlogin-link" href="/onboarding">
                Change Values
              </Link>
              <Button type='submit' onClick={logout}>
                Log Out
            </Button>
            </div>
          </section>
        </>
      ) : (
          <section className='public-nav'>
            <Link className="userlogin-link" to={"/"}>
              Home
              </Link>
            <Link className="userlogin-link" to={"/login"}>
              Login
            </Link>
            <a className="userlogin-link" href="https:/essentialism-1-lambda.github.io/Marketing/">
              About Us
            </a>
          </section>
        )}
    </div>
  );
}
export default Header;
