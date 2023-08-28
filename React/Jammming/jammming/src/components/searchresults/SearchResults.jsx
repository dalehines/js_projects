import React from 'react'
import './searchresults.css'
import Tracklist from '../tracklist/Tracklist'

const SearchResults = (props) => {


  return (
    <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
        </div>
  )
}

export default SearchResults