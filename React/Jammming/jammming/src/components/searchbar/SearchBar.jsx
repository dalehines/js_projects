import React, { useCallback, useState} from 'react';
import './searchbar.css';

const SearchBar = () => {
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
                
        <input type="text" className='searchbar' placeholder='Enter a Song Title'/>
        <button className="SearchButton">
            SEARCH
        </button>
    </div>
  );
};

export default SearchBar;