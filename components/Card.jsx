'use client';

import React from 'react';

const Card = ({ event }) => {
  console.log('baner', event.banner);
  return (
    <div className="card w-full sm:w-59 md:w-80 lg:w-90 xl:w-59 2xl:w-80 bg-base-100 shadow-xl mx-3 my-4 p-0">
      <figure>
        <img src={`https://api.icon-ptucse.in/${event.banner}`} alt={event.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{event.title}</h2>
        <p>{event.description}</p>
        <div className="card-actions justify-end">
          <button type="button" className="btn btn-primary">
            <a href={`/events/${event.id}`}>Click for full details</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

