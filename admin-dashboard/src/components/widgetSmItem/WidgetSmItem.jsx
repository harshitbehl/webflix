import React from "react";
import { Avatar } from "@material-ui/core";
import { Visibility } from "@material-ui/icons";
import "./WidgetSmItem.scss";

function WidgetSmItem({ username, profilePic }) {
  return (
    <li className="widgetSmItem">
      <div className="widgetSmItem__avatar-container">
        <Avatar
          className="widgetSmItem__avatar"
          src={profilePic}
        />
      </div>
      <div className="widgetSmItem__user-container">
        <p className="widgetSmItem__username">{username}</p>
        
      </div>
      <button className="widgetSmItem__button">
        <Visibility />
        <span>Display</span>
      </button>
    </li>
  );
}

export default WidgetSmItem;
