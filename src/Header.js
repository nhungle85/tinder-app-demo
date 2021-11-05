import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import Forum from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import tinderLogo from "./tinder-logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <Link to="/">
        <img className="header__logo" src={tinderLogo} alt="tinder-logo" />
      </Link>
      <Link to="/chat">
        <IconButton>
          <Forum fontSize="large" className="header__icon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
