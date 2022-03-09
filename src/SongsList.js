import React from "react";
import "./SongsList.css";

const SongsList = ({ track }) => {
  return (
    <div className="songsList">
      <img
        src={track.album.images[0].url}
        alt=""
        className="songsList__cover"
      />

      <div className="songsList__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")}
          {track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongsList;
