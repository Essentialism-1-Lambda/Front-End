
<<<<<<< HEAD:src/utils/UserContext.js
import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import {Button} from '@material-ui/core';
import { UserContext } from '../../Context/UserContext';

export const Header = () => {
  const history = useHistory();
	const {isAuth} = useContext(UserContext);
=======
    //import as:
    // import { UserContext } from './utils/UserContext';
>>>>>>> 66361b259ed43bd6db5f1271b3e560fd9430bc4a:src/Context/UserContext.js

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload(false);
    history.push('/');
  };

<<<<<<< HEAD:src/utils/UserContext.js
  return (
    <div className='nav-bar'>
      {isAuth ? (
        <>
          <section className='private-nav'>
            <div className='links'>
              <Link className="userlogin-link" to={"/dashboard"}>
                Dashboard
              </Link>
              <Link className="userlogin-link" to={"/onboarding"}>
                Change Values
              </Link>
              <a className="userlogin-link" href="https:/essentialism-1-lambda.github.io/Marketing/">
              About Us
              </a>
              <Button type='submit' className="userlogin-link" onClick={logout}>
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
=======
    // return (
    //     <UserContext.Provider value={user}>
    //         <div className="container">
    //             <User />
    //         </div>
    //     </UserContext.Provider>
    // );

const UserContext = createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;
export {UserProvider, UserConsumer, UserContext};
>>>>>>> 66361b259ed43bd6db5f1271b3e560fd9430bc4a:src/Context/UserContext.js
