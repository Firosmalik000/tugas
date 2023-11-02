import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import Logoutbtn from '../auth/logoutbtn';

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">Home</Link>

      {loggedIn === false && (
        <>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer">Customer</Link>
          <Logoutbtn />
        </>
      )}
    </div>
  );
}

export default Navbar;
