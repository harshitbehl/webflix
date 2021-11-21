import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <header className="login__header">
        <span className="login__logo">Webflix</span>
      </header>
      <div className="login__container">
        <div className="login__form">
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button onClick={loginHandler}>Sign In</button>
          <p>
            New to Webflix? <span>Sign up now</span>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
