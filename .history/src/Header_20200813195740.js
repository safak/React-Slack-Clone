import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
          <Avatar 
          className="headerAvatar"
          alt="Safak"
          src="safak"
          /> 
      </div>
      <div className="headerSearch"></div>
      <div className="headerRight"></div>
    </div>
  );
};

export default Header;
