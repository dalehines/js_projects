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

const App = () => {
  return (

    <>
        <Nav />
        <SearchBar />
    </>
  )
}

export default App