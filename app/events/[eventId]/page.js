'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Navbar } from '../../../components';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [eventId, setEventId] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const uid = localStorage.getItem("user_id");
  console.log("user id", uid);
  const authToken = localStorage.getItem("authToken");
  console.log("Token:", authToken);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const eventIdFromPath = pathParts[pathParts.length - 1];
    setEventId(eventIdFromPath);

    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`https://api.icon-ptucse.in/event-detail/${eventIdFromPath}/`);
        console.log("event details  :", response.data);
        const eventData = response.data;
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, []);

  const handleRegistration = async () => {
    const registrationData = {
      event: event.title,
      is_paid: true,
      student: uid,
    };

    try {
      const authToken = localStorage.getItem('authToken');

      const response = await axios.post('https://api.icon-ptucse.in/register/', registrationData, {
        headers: {
          Authorization: `Token ${authToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response) {
        setRegistrationSuccess(true);
        setShowSuccessPopup(true);
      }
    } catch (error) {
      if (error.response.status === 403) {
        alert("You have already registered for this event.");
      } else {
        console.error('Error registering for the event:', error);
        alert("Have an ICON profile in order to register for an event. Create a profile and continue.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-banner bg-gray-800 text-white py-2 px-4 text-center">
        <h1 className="text-2xl">Event Details Page</h1>
      </div>
      <motion.div
        className="bg-primary-black text-white p-4 flex justify-center items-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-blue-800 text-white p-6 rounded-lg shadow-lg w-full max-w-xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {event ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="col-span-1">
                <motion.figure
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={`${event.banner}`} alt={event.title} className="w-full" />
                </motion.figure>
              </div>
              <div className="col-span-1">
                <h2 className="text-xl py-2">{event.title}</h2>
                <p className="text-lg py-2">Category: {event.category}</p>
                {/* <p className="text-lg py-2">Date: {event.date}</p> */}
                <p className="text-lg py-2">Registration fee: INR {event.reg_fee}</p>
                <p className="text-lg py-2">Venue: {event.venue}</p>
              </div>
              <div className="col-span-2">
                <div className="text-lg text-white" style={{ wordWrap: 'break-word' }} dangerouslySetInnerHTML={{ __html: event.rules }} />
                {!registrationSuccess && (
                  <motion.button
                    onClick={handleRegistration}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    Register for Event
                  </motion.button>
                )}
              </div>
            </div>
          ) : (
            <p>Loading event details...</p>
          )}
          {showSuccessPopup && (
            <motion.div
              className="bg-green-500 text-white font-bold p-2 rounded fixed top-4 right-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Registered. Complete the payment in your{' '}
              <a href="/viewprofile" className="text-red-500 hover:underline">
                Profile page
              </a>{' '}
              for successful registration
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default EventDetail;
