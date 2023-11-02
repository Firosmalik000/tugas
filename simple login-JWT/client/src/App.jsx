import { useState } from 'react';
import React from 'react';
import Router from './route';
import Navbar from './component/layout/navbar';
import axios from 'axios';
import { AuthContextProvider } from './context/authContext';

// untuk memasukkan axios dalam cookie
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
