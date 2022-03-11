import React, { Component } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from '@mui/material';
import "./Header.scss";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Header(backButton) {
  console.log(window)
  return (
    <div className="header">
      {backButton==="/" ? (
        <IconButton>
        {/* <IconButton onClick={() => window.location.replace("/chat")}> */}
          <ArrowBackIosNewIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonOutlineIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
                  <ArrowBackIosNewIcon className="header__icon" fontSize="large" />



      <Link to="/">
        <img
          className="header__logo"
          src="https://apprecs.org/ios/images/app-icons/256/dc/1097224412.jpg"
          alt="tinder logo"
        />
      </Link>

      <Link to="/c">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
export default Header;