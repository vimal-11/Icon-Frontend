'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypingBoldText } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } from '../utils/motion';

const Feedback = () => {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleInputChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(fields);

    try {
      const response = await fetch('http://127.0.0.1:8000/feedback/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });

      if (response.ok) {
        // Handle a successful response, such as displaying a success message.
        console.log('Feedback submitted successfully');
        alert('Feedback submitted successfully');
      } else {
        // Handle errors, such as displaying an error message.
        console.error('Error submitting feedback');
        alert('Error submitting feedback');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred, try again');
    }

  };

  return (
    <section className="flex justify-center items-center h-screen">
      <motion.div variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingBoldText title="Drop your Queries" textStyles="text-center" />

        <motion.form
          variants={fadeIn('down', 'tween', 1, 1)}
          onSubmit={handleSubmit}
          className="flex-col p-4 bg-black bg-opacity-30 justify-center rounded-lg shadow-md space-y-6 w-[70%] sm:w-[80%] md:w-[60%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleInputChange}
            value={fields.name}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            onChange={handleInputChange}
            value={fields.email}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            required
          />
          <textarea
            name="feedback"
            placeholder="Your Query"
            onChange={handleInputChange}
            value={fields.feedback}
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full h-24 resize-none"
            required
          />
          <button
            type="submit"
            className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md w-full"
          >
            Submit Query
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}

export default Feedback;