import React from "react";
import "./SwipeButtons.scss";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from "@mui/icons-material/StarRate";
import Favorite from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
<<<<<<< HEAD
import { IconButton } from '@mui/material';
=======
import IconButton from "@mui/icons-material/IconButtton";

>>>>>>> 44b46c0d3482a9185c7c525136f563ac022b5474
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <h1>Buttons go here</h1>
      <IconButton className="swipeButtons__repeat">
        <ReplayIcon fontSize="large" c />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
