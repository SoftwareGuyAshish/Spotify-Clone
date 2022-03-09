import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import SongsList from "./SongsList";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="infoText">
          <strong>Playlist</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="song__list">
        <div className="playlist__buttons">
          <PlayCircleFilledIcon className="button__shuffle" />
          <FavoriteBorderOutlinedIcon fontSize="large" />
          <MoreHorizOutlinedIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => {
          return <SongsList track={item.track} />;
        })}
      </div>
    </div>
  );
};

export default Body;
