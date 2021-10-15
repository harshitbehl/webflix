import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React from "react";
import "./Featured.scss";

function Featured() {
  return (
    <div className="featured">
      <img
        className="featured__showcase-image"
        src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt=""
      />

      <div className="featured__info">
        <div className="featured__title-container">
          <img
            className="featured__title-image"
            src="https://www.freepnglogos.com/uploads/avengers-png-logo/avengers-logo-png-transparent-avengers-logo-images-7.png"
            alt=""
          />
        </div>

        <p className="featured__description">
          It's Avengers vs. Avengers when Captain America fights to keep his
          superhero friend independent, while his pal Iron Man supports
          government control.
        </p>
        <div className="featured__buttons">
          <button className="featured__play-button">
            <PlayArrow style={{ fontSize: "2.8rem" }} />
            <span>Play</span>
          </button>
          <button className="featured__info-button">
            <InfoOutlined style={{ fontSize: "2.8rem" }} />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
