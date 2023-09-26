'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { React, handleSubmit, useState } from 'react';
import axios from 'axios';
import styles from '../../styles';

import { textVariant, fadeIn, staggerContainer } from '../../utils/motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.icon-ptucse.in/login/', {
        email,
        password,
      });
      console.log('email:', response.data);
      const authToken = response.data.token; // Extract token from response
      console.log('Received Token:', authToken); // Log the token
      localStorage.setItem('authToken', authToken); // Store the token in localStorage
      const uid = response.data.user_id;
      const uname = response.data.user_name;
      localStorage.setItem('user_id', uid);
      localStorage.setItem('user_name', uname);

      if (response.data.success) {
        // Login successful, navigate to home page with the user's details
        router.push('/');
        const authToken = response.data.token;
        console.log('after login Token:', authToken);
      } else {
        // Incorrect credentials, display pop-up message
        setShowPopup(true);
        setLoginStatus('Username or password is incorrect');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
    >
      <motion.div
        variants={fadeIn('up', 'tween', 0.5, 0.5)}
        className="relative flex flex-col md:flex-row md:w-2/3 w-full lg:shadow-extra-lg m-4"
      >
        <div className="w-full md:w-1/2 m-0 rounded-xl p-0">
          <img
            src="/img-1.jpg"
            alt="Herologinimg"
            className="w-full h-full object-cover rounded-t-lg md:rounded-bl-lg md:rounded-tl-lg m-0 p-0"
          />
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="relative w-full md:w-1/2 p-[30px] m-0 bg-black bg-opacity-30 rounded-b-lg md:rounded-br-lg md:rounded-tr-lg space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
            Login
          </h1>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-[rgb(60,44,139)] hover:bg-[rgb(48,35,112)] text-white rounded-lg w-full"
            onClick={handleLogin}
          >
            Login
          </button>
          <div className="w-full text-center mt-8">
            <a href="/forgot-password" className="text-sm text-white">Forgot password?</a>
            <a href="/register" className="text-sm text-white ml-4">Sign up</a>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default Login;
