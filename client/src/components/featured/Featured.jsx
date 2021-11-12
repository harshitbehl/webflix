import React, { useEffect, useState } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";
import axios from "axios";

function Featured({ type }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODIyMmZlZTZjNmNmMzRjOTY4MDk2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjUzMDQyMCwiZXhwIjoxNjM2OTYyNDIwfQ.3mBfJaO8suEpsaOA_4cTDcifH7klClyvH1IVY4XztOU",
          },
        });
        setContent(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomContent();
  }, [type]);

  return (
    <div className="featured">
      <img
        className="featured__showcase-image"
        src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <div className="featured__overlay"></div>

      {type && (
        <div className="featured__category">
          <h2>{type === "movies" ? "Movies" : "TV Shows"}</h2>
          <select name="genre" id="genre">
            <option>Genres</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <div className="featured__info">
        <div className="featured__title-container">
          <img
            className="featured__title-image"
            src={content.imgTitle}
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
