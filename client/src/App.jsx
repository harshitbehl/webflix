import React from "react";
import "./App.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/register" />}
        </Route>
        <Route path="/register">
          {!user ? <Register /> : <Redirect to="/" />}
        </Route>
        <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
        {user && (
          <>
            <Route path="/movies">{<Home type="movie" />}</Route>
            <Route path="/tvShows">{<Home type="tvShow" />}</Route>
            <Route path="/watch">{<Watch />}</Route>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
