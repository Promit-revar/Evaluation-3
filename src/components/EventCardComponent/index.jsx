/* eslint-disable */
import React from 'react';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/dateFormat';
import './eventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../contexts/themeContext';
//import PropTypes from 'prop-types';

import axios from 'axios';

export default function EventCardComponent(props){
    const { theme } = React.useContext(ThemeContext);
    //console.log(props.event);
  const [book, setBook] = React.useState(props.event.isBookmarked);
  const [register, setRegister] = React.useState(props.event.isRegistered);

  const clickBookmarkHandler = () => {
    
    axios.patch(`http://localhost:8000/api/events/${props.event.id}`, { isBookmarked: !book }).then(response => {
        setBook(!book);
      });
    
  };
  const registerEventHandler = () => {
    console.log(!register)
    axios.patch(`http://localhost:8000/api/events/${props.event.id}`, { isRegistered: !register }).then(response => {
  }).catch(error => console.log(error));
    setRegister(!register);
};

  return (
    <div className='event-card' style={{backgroundColor:theme['currTheme']}}>
      <div className='event-card-image'>
        <img src={props.event.imgUrl} alt={props.event.name} />
      </div>
      <div className='event-card-content'>
        <p className='event-card-content-name'>{props.event.name}</p>
        <p className='event-card-content-description'>{props.event.description}</p>
        <p className='event-card-content-venue'>
          <strong>VENUE:</strong> {props.event.venue}
        </p>
        <p className='event-card-content-date'>
          <strong>DATE: </strong>
          {getFormattedDateFromUtcDate(props.event.datetime)}
        </p>
      </div>
      <div className='event-card-footer'>
        <FontAwesomeIcon
          icon={faCircleCheck}
          className={register ? 'checked' : 'unchecked'}
          onClick={registerEventHandler}
        />
        <FontAwesomeIcon
          icon={faBookmark}
          className={book ? 'bookmarked' : 'unbookmarked'}
          onClick={clickBookmarkHandler}
        />
      </div>
    </div>
  );
};
