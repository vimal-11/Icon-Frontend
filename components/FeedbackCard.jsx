'use client';

import { React, handleSubmit } from 'react';
import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const FeedbackCard = () => (
  <motion.div
    variants={fadeIn('left', 'spring', 2.0, 1)}
    className="flex md:flex-row flex-col gap-4"
  >
    <motion.form
      onSubmit={handleSubmit}
      className="p-4 bg-black  bg-opacity-30 rounded-lg shadow-md space-y-2 sm:p-6 sm:w-96"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
        required
      />
      <textarea
        name="feedback"
        placeholder="Your Feedback"
        className="py-2 px-3 rounded-md border bg-transparent text-white w-full h-24 resize-none"
        required
      />
      <button
        type="submit"
        className="py-2 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-md w-full"
      >
        Submit Feedback
      </button>
    </motion.form>
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
          Still have Queries ?
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
          Seek Answers to Your Questions for a Smooth and Enjoyable Experience Ahead.
        </p>
      </div>

    </div>
  </motion.div>
);

export default FeedbackCard;
