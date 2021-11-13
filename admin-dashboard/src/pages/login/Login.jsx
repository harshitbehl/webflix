import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";

import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="login__form">
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
        <button onClick={loginHandler} disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
