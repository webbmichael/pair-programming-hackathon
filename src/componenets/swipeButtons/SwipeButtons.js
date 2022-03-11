import React from "react";
import "./SwipeButtons.scss";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import CloseIcon from "@mui/icons-material/StarRate";
import Favorite from "@mui/icons-material/Favorite";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import IconButton from "@mui/icons-material/IconButtton";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <h1>Buttons go here</h1>
      <IconButton>
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
