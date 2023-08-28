import React from 'react'
import './tracklist.css'
import Track from '../track/Track'

const Tracklist = (props) => {


  return (
    <div className='Tracklist'>
      {props.tracks.map((track) => {
        return (
          <Track 
          track={track}
          /* key={track.id} */
          onAdd={props.onAdd}
          isRemoval={props.isRemoval}
          onRemove={props.onRemove}
          />
        );
      })}
        
    </div>
  );
};

export default Tracklist;