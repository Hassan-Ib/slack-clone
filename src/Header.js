import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useStateProvider } from "./StateProvider";

const Header = () => {
  const { user } = useStateProvider();
  return (
    <header className="header">
      <div className="header__left">
        {/* avater for logedin user */}
        <Avatar
          className="header__avater"
          alt={user?.displayName}
          src={user?.photoURL}
        />

        {/* time icon */}
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        {/* search icon */}
        <SearchIcon />
        {/* input */}
        <input type="text" placeholder="Search clever Programmer" />
      </div>
      <div className="header__right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </header>
  );
};

export default Header;
