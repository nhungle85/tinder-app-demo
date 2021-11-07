import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import Forum from "@material-ui/icons/Forum";
import { IconButton } from "@material-ui/core";
import tinderLogo from "./tinder-logo.png";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

function Header({ backButton }) {
  const navigate = useNavigate();

  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => navigate(backButton)}>
          <ArrowBackIosIcon fontSize="large" className="header__icon" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon fontSize="large" className="header__icon" />
        </IconButton>
      )}
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
