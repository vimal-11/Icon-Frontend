'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import { useNavigate } from 'next/router';
import { useRouter } from 'next/navigation';

const EventDetail = () => {
  const [event, setEvent] = useState(null);
  const [eventId, setEventId] = useState(null);
  const uid = localStorage.getItem('user_id');

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const eventIdFromPath = pathParts[pathParts.length - 1];
    setEventId(eventIdFromPath);

    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/reg-detail/${eventIdFromPath}/`);
        const eventData = response.data;
        console.log(response.data);
        setEvent(eventData);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEventDetails();
  }, []);
  const router = useRouter();
  const handleAddTeamMember = (eventName, eventId) => {
    // Construct the URL for the /teams page with query parameters
    const url = `/teams?eventName=${encodeURIComponent(eventName)}&eventId=${encodeURIComponent(eventId)}`;

    // Use router.push to navigate to the new page with query parameters
    router.push(url);
  };

  return (
    <motion.div
      className="bg-primary-black text-white p-4 h-screen flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {event ? (
        <motion.div
          className="bg-black bg-opacity-30 p-8 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">Event Details</h1>
          {/* <p className="text-lg font-semibold">Registration ID: {event.id}</p>
          <p className="text-lg font-semibold">UID: {uid}</p> */}
          <p className="text-lg font-semibold">Team Lead: {event.team.team_lead.name}</p>
          <p className="text-lg font-semibold">Team Members:</p>
          <ul>
            {event.team.team_member.map((member) => (
              <li key={member.id}>{member.name}</li>
            ))}
          </ul>

          <p className="text-lg font-semibold">Event Name: {event.registration.event.title}</p>
          <p className="text-lg font-semibold">Paid: {event.registration.is_paid ? 'Yes' : 'No'}</p>
          <p className="text-lg font-semibold">Registered At: {event.registration.registered_at}</p>
          <p className="text-lg font-semibold">Team Event: {event.registration.event.is_team ? 'Yes' : 'No'}</p>
          {event.registration.event.is_team && (
            <motion.button
              onClick={() => handleAddTeamMember(event.registration.event.title, event.registration.event.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 mt-4"
            >
              Add Team Member
            </motion.button>
          )}
        </motion.div>
      ) : (
        <p>Loading event details...</p>
      )}
    </motion.div>
  );
};

export default EventDetail;
