/* Create Static Components
Create components for your Jammming application. You may structure your components as you see fit, but you should have a component representing each of these core components of the interface:

App
SearchBar
SearchResults
Playlist
Tracklist
Track
Additionally, make sure that your interface has a Save To Spotify button and a Search button.
 */


import React from 'react'
import Nav from './components/nav/Nav'
import SearchBar from './components/searchbar/SearchBar'
import SearchResults from './components/searchresults/SearchResults'
import Track from './components/track/Track'
import Tracklist from './components/tracklist/Tracklist'
import Playlist from './components/playlist/Playlist'

const App = () => {
  return (
    
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
        <Nav />
        <SearchBar />
        <SearchResults />
       <Playlist />
       <Track />
       <Tracklist />
    </div>
  )
}

export default App