import React from "react";
import { Link } from "react-router-dom";
import UserDetails from "../../components/userDetails/UserDetails";
import UserUpdate from "../../components/userUpdate/UserUpdate";

import "./User.scss";

function User() {
  return (
    <div className="user">
      <div className="user__header">
        <h2 className="user__title">Edit User</h2>
        <Link to="/newUser">
          <button className="user__create-button">Create</button>
        </Link>
      </div>
      <div className="user__body">
        <UserDetails />
        <UserUpdate />
      </div>
    </div>
  );
}

export default User;
