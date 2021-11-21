import React, { useRef, useState } from "react";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import axios from "axios";
import { useHistory } from "react-router";

import "./Register.scss";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const startHandler = () => {
    setEmail(emailRef.current.value);
  };

  const membershipHandler = async (event) => {
    event.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axios.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <header className="register__header">
        <span className="register__logo">Webflix</span>
        <Link to="/login">
          <button className="register__signIn-button">Sign In</button>
        </Link>
      </header>
      <div className="register__container">
        <div className="register__showcase">
          <h1>
            Unlimited movies, TV <br /> shows, and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          {!email ? (
            <div className="register__input-container">
              <input type="email" placeholder="Email address" ref={emailRef} />
              <button onClick={startHandler}>
                Get Started
                <ArrowForwardIosOutlined className="register__arrow-icon" />
              </button>
            </div>
          ) : (
            <form className="register__input-container">
              <input type="username" placeholder="Username" ref={usernameRef} />
              <input type="password" placeholder="Password" ref={passwordRef} />
              <button
                className="register__membership-button"
                onClick={membershipHandler}
              >
                Start Membership
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Register;
