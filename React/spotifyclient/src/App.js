import { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

const [token, setToken] = useState("");

useEffect

function App() {
  const CLIENT_ID = "088cb0be41704d26880cd2984b93baa8"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"


  return (
    <div className="App">
      <header className="App-header">
        <h1>Spotify React</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
      </header>
    </div>
  );
}

export default App;
