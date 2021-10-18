import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div className="login">
      <header className="login__header">
        <span className="login__logo">Webflix</span>
      </header>
      <div className="login__container">
        <div className="login__form">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
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
