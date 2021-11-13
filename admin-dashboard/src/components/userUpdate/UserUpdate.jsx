import React from "react";
import { ArrowUpward } from "@material-ui/icons";

import "./UserUpdate.scss";

function UserUpdate() {
  return (
    <div className="userUpdate">
      <h3 className="userUpdate__title">Update</h3>
      <form className="userUpdate__form">
        <div className="userUpdate__form-left">
          <label>Username</label>
          <input type="text" placeholder="harshitbehl123" />
          <label>Full Name</label>
          <input type="text" placeholder="Harshit Behl" />
          <label>Email</label>
          <input type="email" placeholder="harshit.behl@gmail.com" />
          <label>Phone</label>
          <input type="text" placeholder="+1 647 516 1996" />
          <label>Address</label>
          <input type="text" placeholder="Toronto, Canada" />
        </div>
        <div className="userUpdate__form-right">
          <div className="userUpdate__image-container">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
          <label htmlFor="imageUpload">
            <ArrowUpward /> <span>Upload</span>
          </label>
          <input type="file" id="imageUpload" />
          <button>Update</button>
        </div>
      </form>
    </div>
  );
}

export default UserUpdate;
