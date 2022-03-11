import React, { Component } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/icons-material/IconButtton";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Header(backButton) {
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace}>
          <ArrowBackIosNewIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonOutlineIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header__logo"
          src="https://apprecs.org/ios/images/app-icons/256/dc/1097224412.jpg"
          alt="tinder logo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
