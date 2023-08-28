import React, { useCallback } from 'react'
import './playlist.css'
import Tracklist from '../tracklist/Tracklist'

const Playlist = (props) => {

    const handleNameChange = useCallback(
      (event) => {
        props.onNameChange(event.target.value);
      },
      [props.onNameChange],
    )
    
  return (


    <div className='Playlist'>

        <input onChange={handleNameChange} defaultValue={"New Playlist"}/>


    <button className="Playlist-save" onClick={props.onSave}> </button>

    </div>
  )
}

export default Playlist;