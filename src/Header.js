import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import Forum from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import tinderLogo from "./tinder-logo.png";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={tinderLogo} alt="tinder-logo" />

      <IconButton>
        <Forum fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Header;
