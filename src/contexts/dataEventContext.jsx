/* eslint-disable */

import React from 'react';

export const eventsContext = React.createContext({});

export const EventContextProvider = ({ children }) => {
  const [events, setEvents] = React.useState([]);
  return <eventsContext.Provider value={{ events, setEvents }}>{children}</eventsContext.Provider>;
};

export default EventContextProvider;