import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { getLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    try {
      const loginData = { email, password };
      await axios
        .post('http://localhost:5000/auth/login', loginData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      await getLoggedIn();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1> Login </h1>
      <form onSubmit={login}>
        <input type="text" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Login;
