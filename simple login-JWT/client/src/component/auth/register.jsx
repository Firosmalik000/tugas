import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  // auto navigate without refresh
  const { getLoggedIn } = useContext(AuthContext);
  async function register(e) {
    e.preventDefault();
    try {
      const registerData = { email, password };
      await axios
        .post('http://localhost:5000/auth', registerData)
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
      <h1>Register a new account</h1>
      <form onSubmit={register}>
        <input type="text" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Register;
