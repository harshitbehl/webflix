import React, { useEffect, useState } from "react";
import {
  Add,
  PlayCircleFilledWhiteRounded,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import "./ListItem.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function ListItem({ item }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODIyMmZlZTZjNmNmMzRjOTY4MDk2MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjUzMDQyMCwiZXhwIjoxNjM2OTYyNDIwfQ.3mBfJaO8suEpsaOA_4cTDcifH7klClyvH1IVY4XztOU",
          },
        });
        setMovie(res.data);
      } catch (error) {}
    };
    getMovie();
  }, [item]);

  return (
    <Link to={{ pathname: "/watch", movie: movie }}>
      <div className="listItem">
        <div className="listItem__image-container">
          <img className="listItem__image" src={movie.imgThumbnail} alt="" />
          <video
            className="listItem__video"
            autoPlay
            muted
            loop
            src={movie.trailer}
          />
        </div>

        <div className="listItem__info">
          <div className="listItem__info-icons">
            <PlayCircleFilledWhiteRounded className="listItem__info-icon" />
            <Add className="listItem__info-icon" />
            <ThumbUpAltOutlined className="listItem__info-icon" />
            <ThumbDownAltOutlined className="listItem__info-icon" />
          </div>
          <div className="listItem__info-ratings">
            <span>98% Match</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
            <span>HD</span>
          </div>
          <div className="listItem__info-genres">
            <span>{movie.genre}</span>
            <span>&middot;</span>
            <span>Exciting</span>
            <span>&middot;</span>
            <span>Action</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
