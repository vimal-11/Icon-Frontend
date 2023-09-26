'use client';

import { motion } from "framer-motion";
import { useState } from 'react';
import axios from 'axios';
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  const handleResetPassword = async () => {
    try {
      const response = await axios.post('https://api.icon-ptucse.in/api/password-reset/', {
        email,
      });
      console.log('Reset Password:', response.data);
      setResetSuccess(true);
    } catch (error) {
      console.error('Password reset request failed:', error);
      alert('Password reset request failed. Please try again.');
    }
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
            src="/img-1.jpg" // Change the image source accordingly
            alt="Herologinimg"
            className="w-full h-full object-cover rounded-t-lg md:rounded-bl-lg md:rounded-tl-lg m-0 p-0"
          />
        </div>
        <motion.form
        //   onSubmit={handleSubmit} // Make sure you have handleSubmit defined
          className="relative w-full md:w-1/2 p-[30px] m-0 bg-black bg-opacity-30 rounded-b-lg md:rounded-br-lg md:rounded-tr-lg space-y-4"
        >
          <p className="text-white text-center">Enter your email to reset your password:</p>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          {resetSuccess ? (
            <div className="bg-green-500 text-white py-2 px-4 rounded-lg text-center">
              Password reset email sent successfully. Click on the link given in the email to rest your password.
            </div>
          ) : null}
          {/* Add the Reset Password button */}
          <button
            type="button"
            className="py-2 px-4 bg-[rgb(60,44,139)] hover:bg-[rgb(48,35,112)] text-white rounded-lg w-full"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default ForgotPassword;
