import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/layout/navbar';
import Register from './component/auth/register';
import Login from './component/auth/login';
import AuthContext from './context/authContext';

function Router() {
  const { loggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"></Route>
        {loggedIn === false && (
          <>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </>
        )}
        {loggedIn === true && <Route path="/customer"></Route>}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
