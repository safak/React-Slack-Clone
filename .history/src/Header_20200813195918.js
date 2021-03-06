import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { AccessTime, Search } from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Avatar className="headerAvatar" alt="Safak" src="safak" />
        <AccessTime />
      </div>
      <div className="headerSearch"></div>
      <Search />
      <div className="headerRight"></div>
    </div>
  );
};

export default Header;
