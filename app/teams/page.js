'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

const TeamComponent = () => {
  const [teamLead, setTeamLead] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [studentSuggestions, setStudentSuggestions] = useState([]);
  const [storedTeamID, setStoredTeamID] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventId, setEventId] = useState('');

  useEffect(() => {
    const currentUrl = window.location.href;
    const urlSearchParams = new URLSearchParams(currentUrl.split('?')[1]);
    const newEventName = urlSearchParams.get('eventName');
    const newEventId = urlSearchParams.get('eventId');

    if (newEventName !== eventName || newEventId !== eventId) {
      setEventName(newEventName);
      setEventId(newEventId);

      const authToken = localStorage.getItem('authToken');
      const uid = localStorage.getItem('user_id');

      fetch(`http://127.0.0.1:8000/event-team-lead/${uid}/${newEventId}/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${authToken}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const teamID = data.id;
          console.log('team id', teamID);
          localStorage.setItem('teamData', JSON.stringify(teamID));
          setStoredTeamID(teamID);
          fetchStudents(teamID);
        })
        .catch((error) => {
          console.error('Error fetching event names:', error);
        });

      const storedUserName = localStorage.getItem('user_name');
      setTeamLead(storedUserName);
    }
  }, [eventName, eventId]);

  async function fetchStudents(teamID) {
    try {
      const authToken = localStorage.getItem('authToken');
      const studentsResponse = await fetch(`http://127.0.0.1:8000/add-team-member/${teamID}/`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${authToken}`,
        },
      });

      const studentsData = await studentsResponse.json();
      const studentNames = studentsData.map((student) => student.name);
      setStudentSuggestions(studentNames);
    } catch (err) {
      console.error('Failed to fetch students:', err);
    }
  }

  async function save(event) {
    event.preventDefault();
    const authToken = localStorage.getItem('authToken');
    const uid = localStorage.getItem('user_id');

    try {
      const formattedTeamMembers = teamMembers.map((name) => ({ name }));
      const teamData = {
        team_member: formattedTeamMembers,
      };

      await fetch(`http://127.0.0.1:8000/add-team-member/${storedTeamID}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${authToken}`,
        },
        body: JSON.stringify(teamData),
      });

      alert('Team Created Successfully');
      setTeamLead('');
      setTeamMembers([]);
    } catch (err) {
      alert('Failed to create team');
    }
  }

  function handleTeamMembersChange(values) {
    setTeamMembers(values);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { scale: 0.5 },
    visible: { scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      <div className="bg-banner bg-gray-800 text-white py-2 px-4 text-center font-extrabold text-xl">
        <p>Add team members for {eventName}</p>
      </div>

      <motion.div
        className="bg-primary-black text-white p-4 h-screen flex justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-black bg-opacity-30 p-8 rounded-lg w-full max-w-xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl font-bold mb-4 text-center uppercase">Team Details</h1>
          <div className="container mt-4">
            <form>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Team Lead</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-black bg-white"
                  value={teamLead}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Team Members</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-black bg-white"
                  value={teamMembers}
                  onChange={(e) => handleTeamMembersChange(e.target.value.split(','))}
                  list="studentSuggestions"
                  multiple
                />
                <datalist id="studentSuggestions">
                  {studentSuggestions.map((name, index) => (
                    <option key={index} value={name} />
                  ))}
                </datalist>
              </div>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-2">Event </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 text-black bg-white"
                  value={eventName}
                  readOnly
                />
              </div>
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-transform duration-300 mt-4"
                  onClick={save}
                >
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TeamComponent;

