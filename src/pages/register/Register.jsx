import React, { useRef, useState } from "react";
import { ArrowForwardIosOutlined } from "@material-ui/icons";
import "./Register.scss";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const startHandler = () => {
    setEmail(emailRef.current.value);
  };

  const membershipHandler = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
      <header className="register__header">
        <span className="register__logo">Webflix</span>
        <button className="register__signIn-button">Sign In</button>
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
