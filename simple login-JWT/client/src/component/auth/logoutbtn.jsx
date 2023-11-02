import React, { useContext } from 'react';

import AuthContext from '../../context/authContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logoutbtn() {
  const navigate = useNavigate();
  const { getLoggedIn } = useContext(AuthContext);
  async function logout() {
    await axios.get('http://localhost:5000/auth/logout');
    await getLoggedIn();
    navigate('/');
  }
  return <button onClick={logout}>Log Out</button>;
}

export default Logoutbtn;
