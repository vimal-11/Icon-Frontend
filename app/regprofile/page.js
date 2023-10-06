'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { textVariant, fadeIn, staggerContainer } from '../../utils/motion';
import { Navbar } from '../../components';

const StudentComponent = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [dept, setDept] = useState('');
  const [year, setYear] = useState(0);
  //   const [email, setEmail] = useState("");
  const [phNo, setPhNo] = useState('');
  const [idCard, setIdCard] = useState(null);

  const handleImageChange = (event) => {
    setIdCard(event.target.files[0]);
  };

  async function save(event) {
    event.preventDefault();
    try {
      const authToken = localStorage.getItem('authToken');
      console.log('Token:', authToken);

      const formData = new FormData();
      formData.append('name', name);
      formData.append('college', college);
      formData.append('dept', dept);
      formData.append('year', year);
      formData.append('ph_no', phNo);
      formData.append('id_card', idCard);

      await axios.post('https://api.icon-ptucse.in/student/', formData, {
        headers: {
          Authorization: `Token ${authToken}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Token after:', authToken);

      alert('Student Registration Successful');
      setName('');
      setCollege('');
      setDept('');
      setYear(0);
      //   setEmail("");
      setPhNo('');
      setIdCard(null);
    } catch (err) {
      alert('Student Registration Failed. Sign Up in order to create a profile!');
    }
  }

  return (
    <>
      <Navbar />
      <motion.div
        initial="hidden"
        animate="show"
        variants={staggerContainer}
        className="flex justify-center items-center bg-primary-black overflow-hidden h-screen"
      >
        <motion.form
          onSubmit={save}
          variants={fadeIn('up', 'tween', 0.5, 0.5)}
          className="relative w-full md:w-2/3 p-4 m-0 bg-black bg-opacity-30 rounded-lg lg:shadow-extra-lg"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center md:pb-4">
            Student Profile
          </h1>
          <div className="form-group text-white">
            <label>Full Name</label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group text-white">
            <label>College</label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
              value={college}
              onChange={(event) => setCollege(event.target.value)}
            />
          </div>
          <div className="form-group text-white">
            <label>Department</label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
              value={dept}
              onChange={(event) => setDept(event.target.value)}
            />
          </div>
          <div className="form-group text-white">
            <label>Year</label>
            <input
              type="number"
              className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
              value={year}
              onChange={(event) => setYear(parseInt(event.target.value))}
            />
          </div>
          {/* <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div> */}
          <div className="form-group text-white">
            <label>Phone Number</label>
            <input
              type="text"
              className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
              value={`+91${phNo}`}
              onChange={(event) => setPhNo(event.target.value.replace('+91', ''))}
            />
          </div>
          {/* <div className="form-group pb-3 text-white">
            <label>ID Card (less than 2mb)</label>
            <input
              type="file"
              name="id_card"
              className="py-2 px-3 rounded-md border bg-transparent text-white w-full"
              onChange={handleImageChange}
            />
          </div> */}
          <div className="py-5 flex flex-col items-center justify-center">
            <button
              className="py-2 px-4 bg-[rgb(60,44,139)] hover:bg-[rgb(48,35,112)] text-white rounded-lg align-items-center justify-content"
              onClick={save}
            >
              Register
            </button>
          </div>
        </motion.form>
      </motion.div>
    </>
  );
};

export default StudentComponent;
