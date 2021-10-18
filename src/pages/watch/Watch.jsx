import React from "react";
import { ArrowBack } from "@material-ui/icons";
import trailer from "../../assets/trailer.mp4";
import "./Watch.scss";

function Watch() {
  return (
    <div className="watch">
      <div className="watch__backIcon-container">
        <ArrowBack className="watch__back-icon" />
      </div>
      <video className="watch__video" autoPlay muted progress controls loop>
        <source src={trailer} type="video/mp4" />
      </video>
    </div>
  );
}

export default Watch;
