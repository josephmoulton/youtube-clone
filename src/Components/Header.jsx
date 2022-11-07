import React from "react";
import "./Header.css";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon></MenuIcon>
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search"/>
        <SearchIcon className="header__input--btn" ></SearchIcon>
      </div>
      <div className="header__right">
        <VideoCallSharpIcon className="header__icon"></VideoCallSharpIcon>
        <AppsIcon className="header__icon"></AppsIcon>
        <NotificationsIcon className="header__icon"></NotificationsIcon>
        <Avatar alt="Avatar" src="" />
      </div>
    </div>
  );
}

export default Header;
