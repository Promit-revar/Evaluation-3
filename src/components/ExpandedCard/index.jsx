/* eslint-disable */    
import React from 'react';
import { faCircleCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDateFromUtcDate } from '../../utils/dateFormat';
import './expandedCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../../contexts/themeContext';
import axios from 'axios';
import propTypes from 'prop-types';
export default function ExpandedCard(props) {
    const { theme } = React.useContext(ThemeContext);
    const [bookEvent, setBookEvent] = React.useState(props.details.isBookmarked);
    const [registerEvent, setRegisterEvent] = React.useState(props.details.isRegistered);
    const clickBookmarkHandler = () => {
    
        axios.patch(`http://localhost:8000/api/events/${props.details.id}`, { isBookmarked: !bookEvent }).then(response => {
            setBookEvent(!bookEvent);
          });
        
      };
      const registerEventHandler = () => {
        
        axios.patch(`http://localhost:8000/api/events/${props.details.id}`, { isRegistered: !registerEvent }).then(response => {
      }).catch(error => console.log(error));
        setRegisterEvent(!registerEvent);
    };
    return (
         <div className='event-card-expanded' style={{backgroundColor:theme['currTheme']}}>
         <div className='event-card-image-expanded'>
                 <img src={props.details.imgUrl} alt={props.details.name} />
             </div><div className='event-card-content-expanded'>
                     <p className='event-card-content-name-expanded'>{props.details.name}</p>
                     <p className='event-card-content-description-expanded'>{props.details.description}</p>
                     <p className='event-card-content-venue-expanded'>
                         <strong>VENUE:</strong> {props.details.venue}
                     </p>
                  <p className='event-card-content-date-expanded'>
                         <strong>DATE: </strong>
                         {getFormattedDateFromUtcDate(props.details.datetime)}
                     </p>
                </div><div className='event-card-footer-expanded'>
                     <FontAwesomeIcon
                         icon={faCircleCheck}
                         className={registerEvent ? 'checked' : 'unchecked'}
                          />
                     {(registerEvent) ? <span className='checked'>Registered</span> : null}
                     <FontAwesomeIcon
                         icon={faBookmark}
                         onClick={clickBookmarkHandler}
                         className={bookEvent ? 'bookmarked' : 'unbookmarked'}
                          />
                 </div>
                 <div className='btn'>
                        <button className='close-button' onClick={registerEventHandler} style={{color:theme.currTheme}}>{(registerEvent)? "UNREGISTER":"REGISTER"}</button>
                 </div>
      </div>
    );
}
ExpandedCard.propTypes = {
    details: propTypes.object.isRequired,
    viewCard: propTypes.func.isRequired,
};