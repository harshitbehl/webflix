import React from "react";
import { ArrowBack } from "@material-ui/icons";
import "./Watch.scss";
import { Link, useLocation } from "react-router-dom";

function Watch() {
  const location = useLocation();
  const movie = location.movie;
  console.log(location);

  return (
    <div className="watch">
      <Link to="/">
        <div className="watch__backIcon-container">
          <ArrowBack className="watch__back-icon" />
        </div>
      </Link>
      <video
        className="watch__video"
        autoPlay
        muted
        progress
        controls
        src={movie.video}
      />
    </div>
  );
}

export default Watch;
