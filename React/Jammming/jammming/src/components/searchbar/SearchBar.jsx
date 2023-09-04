import React, { useCallback, useState} from 'react';
import './searchbar.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    //prevents reload until seach button is clicked

    const handleTermChange = ((event) => {
        setTerm(event.target.value);

    }, []);


      const search = useCallback( () => {
        props.onSearch(term);

      }, [props.onSearch, term]);

      
  return (
    <div className="SearchBar">
                
        <input type="text" className='searchbar' onChange={handleTermChange} placeholder='Enter a Song Title'/>
        <button className="SearchButton" onClick={search}>
            SEARCH
        </button>
    </div>
  );
};

export default SearchBar;