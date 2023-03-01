/* eslint-disable */
import React from 'react';
import makeRequest from '../../utils/makeRequest';
import { eventsContext } from '../../contexts/dataEventContext';
import getEvents from '../../endpoints/getEvents';
import EventCardComponent from '../EventCardComponent/index';
import './card.css';

export default function CardComponent() {
  const { events, setEvents} = React.useContext(eventsContext);

  React.useEffect(() => {
    makeRequest(getEvents).then(response => {
      console.log("response",response);
      setEvents([...response]);
    }).catch(error => console.log(error));
  }, []);

  return (
    <div className='card'>
      {events.map(event => (
        <EventCardComponent key={event.id} event={event} />
      ))}
    </div>
  );
};