import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

//Getting account details from spotify into the React
const spotify = new SpotifyWebApi();

function App() {
  //Setting token inside our application

  const [{ user, token }, dispatch] = useDataLayerValue();

  //Extracting token from the URL and then cleaning the URL for security on loading of the page.
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      //Giving user's token to the global spotify object to let it talk with the Spotify app
      spotify.setAccessToken(_token);

      //Getting user-data from the spotify API
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        spotify.getPlaylist("37i9dQZEVXcRtRttDbSlev").then((response) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          });
        });
      });
    }

    //console.log("The token is :", _token);
  }, []);

  console.log("USER: ", user);
  console.log("TOKEN: ", token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
