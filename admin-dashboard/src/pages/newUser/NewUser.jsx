import React from "react";

import "./NewUser.scss";

function NewUser() {
  return (
    <div className="newUser">
      <div className="newUser__header">
        <h2 className="newUser__title">New User</h2>
      </div>
      <div className="newUser__body">
        <form className="newUser__form">
          <div className="newUser__form-container">
            <div className="newUser__form-left">
              <label>Username</label>
              <input type="text" placeholder="username" />
              <label>Email</label>
              <input type="email" placeholder="user@example.com" />
              <label>Phone</label>
              <input type="text" placeholder="+1 234 567 8910" />
              <label>Gender</label>
              <div className="newUser__form-radio">
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
              </div>
            </div>

            <div className="newUser__form-right">
              <label>Full Name</label>
              <input type="text" placeholder="Full Name" />
              <label>Password</label>
              <input type="password" placeholder="Password" />
              <label>Address</label>
              <input type="text" placeholder="Address" />
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <button className="newUser__form-button">Create</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewUser;
