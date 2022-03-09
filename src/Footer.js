import React from "react";
import "./Footer.css";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";

import { Grid, Slider } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src="" alt="" className="footer__albumCover" />
        <div className="footer__songInfo">
          <h4>Song Name</h4>
          <p>Artist</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleOutlinedIcon className="footer__green" />
        <SkipPreviousOutlinedIcon className="footer__icon" />
        <PlayCircleOutlinedIcon fontSize="large" className="footer__icon" />
        <SkipNextOutlinedIcon className="footer__icon" />
        <RepeatOutlinedIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayOutlinedIcon />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item xs>
            <Slider size="small" />
          </Grid>
          <Grid item>
            <VolumeUpOutlinedIcon />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
