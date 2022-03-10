import React, { Component } from "react";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ForumIcon from "@mui/icons-material/Forum";
// import IconButton from "@mui/icons-material/IconButtton";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {/* <IconButton> */}
          <PersonOutlineIcon className="header__icon" />
        {/* </IconButton> */}
        <h4 className="header__logo">Dinder</h4>
        {/* <IconButton> */}
          <ForumIcon className="header__forum" />
        {/* </IconButton> */}
      </div>
    );
  }
}
