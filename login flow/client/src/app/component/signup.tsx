'use client';
import axios from 'axios';
import { baseURL } from '../utils/constans';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { name, email, password };
    axios
      .post(`${baseURL}/signup`, payload)
      .then((res) => {
        toast.success(
          <div>
            Account Created Successfully <br>Please Login</br>
          </div>
        );
        router.push('/login');
      })
      .catch((err) => {
        toast.error(err.response?.data?.message);
      });
  };

  return (
    <div className="grid grid-cols-[30%,1fr]">
      <div className="bg-accent h-screen grid   place-items-center">
        <div className="text-center w-full text-white space-y-8">
          <h2 className="font-bold text-4xl">Welcome Back!</h2>
          <div className="text-[#eeeee] w-fit mx-auto">
            <p>To keep connected with us</p>
            <p>Please login with your personal info</p>
            <Link href="/login">
              <button className="uppercase px-4 py-2 w-[100%] rounded-full border-2 mt-8">Login</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h-screen grid place-items-center">
        <div className="text-center">
          <h1 className="font-bold text-4xl text-accent">Create Account </h1>

          <div className="flex items-center gap-4 pt-8 w-fit nx-auto">
            <div className="icon_wrapper">
              <FaFacebookF />
            </div>
            <div className="icon_wrapper">
              <FaGoogle />
            </div>
            <div className="icon_wrapper">
              <FaInstagram />
            </div>
          </div>
          <p className="pt-8 text-[13px] text-gray-500"> or use your account for regitratiron </p>

          <form className="flex w-[380px] mx-auto flex-col pt-2 gap-2" onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="input__style" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="input__style" required />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input__style" required />
            <button className="uppercase bg-accent hover:bg-accentDark px-4 py-2 text-white mt-4"> Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
