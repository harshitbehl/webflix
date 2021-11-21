import React, { useEffect, useState } from "react";
import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./Featured.scss";
import axios from "axios";

function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
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
      <img className="featured__showcase-image" src={content.img} alt="" />
      <div className="featured__overlay"></div>

      {type && (
        <div className="featured__category">
          <h2>{type === "movie" ? "Movies" : "TV Shows"}</h2>
          <select
            name="genre"
            id="genre"
            onChange={(event) => setGenre(event.target.value)}
          >
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
