import React, { useState } from "react";
import { NotificationsNone, Settings } from "@material-ui/icons";
import { Avatar, Badge } from "@material-ui/core";
import "./Navbar.scss";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // JS Window Scroll Method, whenever we scroll it runs the function
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
  };

  return (
    <div className={isScrolled ? "navbar--scrolled" : "navbar"}>
      <div className="navbar__container">
        <div className="navbar__left">
          <div className="navbar__logo">
            Admin Dashboard <br />
            <span>by Harshit Behl</span>
          </div>
        </div>
        <div className="navbar__right">
          <Badge badgeContent={4}>
            <NotificationsNone className="navbar__notification-icon" />
          </Badge>
          <Settings className="navbar__settings-icon" />
          <Avatar
            className="navbar__avatar"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
