import React, { useState } from "react";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import "./Navbar.scss";
import { Avatar } from "@material-ui/core";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // JS Window Scroll Method, whenever we scroll it runs the function
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  console.log(isScrolled);

  return (
    <div className={isScrolled ? "navbar--scrolled" : "navbar"}>
      <div className="navbar__container">
        <div className="navbar__left">
          <span className="navbar__logo">Webflix</span>
          <div className="navbar__links">
            <span>Home</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>New &amp; Popular</span>
            <span>My List</span>
          </div>
        </div>
        <div className="navbar__right">
          <Search
            className="navbar__icon"
            style={{ fontSize: "2.6rem", margin: "0 1rem" }}
          />
          <span>Kids</span>
          <Notifications
            className="navbar__icon"
            style={{ fontSize: "2.6rem", margin: "0 1rem" }}
          />
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
            variant="rounded"
            style={{ width: 32, height: 32, marginLeft: "1rem" }}
          />
          <div className="navbar__dropdown">
            <ArrowDropDown
              className="navbar__icon navbar__arrowdropdown-icon"
              style={{ fontSize: "2.5rem" }}
            />
            <div className="navbar__dropdown-options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
