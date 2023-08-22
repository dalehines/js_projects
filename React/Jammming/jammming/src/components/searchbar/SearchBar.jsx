import React, { useState} from 'react';
import './searchbar.css';

const SearchBar = () => {

    const handleInputChange = () => {
        
    }

  return (
    <div className="SearchBar">
                
        <input type="text" className='searchbar' placeholder='Enter a Song Title'/>
        <button className="SearchButton">
            SEARCH
        </button>
    </div>
  );
};

export default SearchBar;