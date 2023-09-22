'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import Card from '../../../../components/Card';
import { Navbar } from '../../../../components';
// import { eventData } from '../../constants';

const Event = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState('');
  // const authToken = localStorage.getItem('authToken');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.icon-ptucse.in/events/', {
        // headers: {
        //   Authorization: `Token ${authToken}`,
        // },
      });
      console.log(response.data);
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filteredEvents = events.filter(
    (event) => event.category === 'Cultural'
      && event.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar />
      <section className="flex flex-col justify-center items-center bg-primary-black h-full w-full pl-0 pr-6">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-6xl font-bold text-white mt-4 text-center md:py-2">
          Choose An Event
        </h1>
        <div className="my-8 w-full sm:w-3/4 lg:w-1/2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for an event..."
            className="p-2 w-full"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3 py-5 px-4 gap-0">
          {filteredEvents.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`}>
              <Card key={event.id} event={event} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Event;
