import React, { Component } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
<<<<<<< HEAD
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
=======
import IconButton from "@mui/icons-material/IconButtton";
import "./Header.scss";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Header(backButton) {
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace}>
>>>>>>> 44b46c0d3482a9185c7c525136f563ac022b5474
          <ArrowBackIosNewIcon className="header__icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonOutlineIcon className="header__icon" fontSize="large" />
        </IconButton>
      )}
<<<<<<< HEAD
                  <ArrowBackIosNewIcon className="header__icon" fontSize="large" />


=======
>>>>>>> 44b46c0d3482a9185c7c525136f563ac022b5474

      <Link to="/">
        <img
          className="header__logo"
          src="https://apprecs.org/ios/images/app-icons/256/dc/1097224412.jpg"
          alt="tinder logo"
        />
      </Link>

<<<<<<< HEAD
      <Link to="/c">
=======
      <Link to="/chat">
>>>>>>> 44b46c0d3482a9185c7c525136f563ac022b5474
        <IconButton>
          <ForumIcon className="header__icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
}
export default Header;