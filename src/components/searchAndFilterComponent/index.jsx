/* eslint-disable */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faChevronUp, faMagnifyingGlass, faCircle, faCircleDot } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import './searchFilter.css';

export default function SearchFilterComponent(props){
    const handleSearch = (e) => {
        props.searchFunction(e.target.value);
    }
    return(
        <div className="search-filter">
            <div className='left'>
                <div className="filter">
                <FontAwesomeIcon icon={faFilter} />
                <p> Filter</p>
                <FontAwesomeIcon icon={faChevronUp} />
                </div>
                <div className='filter-type'>
                    <FontAwesomeIcon icon={faCircleDot} />
                    <p>All</p>
                </div>
                <div className='reg'>
                    <FontAwesomeIcon icon={faCircle} />
                    <p>Seat Available</p>
                </div>
                
            </div>
            <div className='right'>
                <div className='search'>
                    <input type="text" placeholder="Search" onChange={handleSearch}/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className='reg'>
                    <FontAwesomeIcon icon={faCircle} />
                    <p>Registered</p>
                </div>
                <div className='reg'>
                    <FontAwesomeIcon icon={faCircle} />
                    <p>Bookmarked</p>
                </div>
          </div>
          
          
          <div className='radio'>
          
          </div>
          </div>
        
)
    };
SearchFilterComponent.propTypes = {
    searchFunction: propTypes.func.isRequired,
};