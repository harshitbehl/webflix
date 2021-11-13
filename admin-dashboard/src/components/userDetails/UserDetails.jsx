import React from "react";
import { Avatar } from "@material-ui/core";
import {
  CalendarToday,
  LocationOnOutlined,
  MailOutline,
  PersonOutline,
  PhoneIphone,
} from "@material-ui/icons";
import "./UserDetails.scss";

function UserDetails() {
  return (
    <div className="userDetails">
      <div className="userDetails__profileContainer">
        <Avatar
          className="userDetails__profileAvatar"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        />
        <div className="userDetails__credContainer">
          <p className="userDetails__profileName">Harshit Behl</p>
          <p className="userDetails__profileTitle">Web Developer</p>
        </div>
      </div>

      <div className="userDetails__accountContainer">
        <h3 className="userDetails__accountTitle">Account Details</h3>
        <p className="userDetails__accountName">
          <PersonOutline className="userDetails__icon" />
          harshitbehl123
        </p>
        <p className="userDetails__accountDate">
          <CalendarToday className="userDetails__icon" /> 26 October 2021
        </p>
      </div>

      <div className="userDetails__contactContainer">
        <h3 className="userDetails__contactTitle">Contact</h3>
        <p className="userDetails__contactNumber">
          <PhoneIphone className="userDetails__icon" /> +1 647 516 1996
        </p>
        <p className="userDetails__contactEmail">
          <MailOutline className="userDetails__icon" /> harshit.behl@gmail.com
        </p>
        <p className="userDetails__contactLocation">
          <LocationOnOutlined className="userDetails__icon" /> Toronto, Canada
        </p>
      </div>
    </div>
  );
}

export default UserDetails;
