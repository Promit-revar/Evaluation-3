/* eslint-disable */
import React from 'react';
import makeRequest from '../../utils/makeRequest';
import { eventsContext } from '../../contexts/dataEventContext';
import ExpandedCard from '../ExpandedCard';
import getEvents from '../../endpoints/getEvents';
import EventCardComponent from '../EventCardComponent/index';
import './card.css';
import SearchFilterComponent from '../searchAndFilterComponent';
export default function CardComponent() {
  const { events, setEvents} = React.useContext(eventsContext);
  const [filteredEvents, setFilteredEvents] = React.useState([]);
  const [card, setCard] = React.useState({});
  React.useEffect(() => {
    makeRequest(getEvents).then(response => {
      console.log("response",response);
      setEvents([...response]);
      setFilteredEvents([...response]);
    }).catch(error => console.log(error));
  }, []);
  const expandCard = (event) => {
    console.log(event);
    setCard(event);
  }
  const handleSearch = (searchText) => {
    setFilteredEvents([...events.filter((data) => data.name.search(searchText) != -1 || data.description.search(searchText) != -1)]);
  }
  if(Object.keys(card).length === 0){
  return (
    <div>
        <SearchFilterComponent searchFunction={handleSearch}/>
        <div className='card'>
            {console.log(filteredEvents)}
        {filteredEvents.map(event => (
            <EventCardComponent key={event.id} event={event} viewCard={expandCard}/>
        ))}
        </div>
    </div>
  );
    }
    else{
    return (
        <div className='card'>
            <ExpandedCard details={card} />
        </div>
    );
    }

};