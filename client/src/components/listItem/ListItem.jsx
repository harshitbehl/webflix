import React from "react";
import {
  Add,
  PlayCircleFilledWhiteRounded,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import trailer from "../../assets/trailer.mp4";
import "./ListItem.scss";

function ListItem() {
  return (
    <div className="listItem">
      <div className="listItem__image-container">
        <img
          className="listItem__image"
          src="https://images.unsplash.com/photo-1534375971785-5c1826f739d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
        />
        <video className="listItem__video" autoPlay muted loop>
          <source src={trailer} type="video/mp4" />
        </video>
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
          <span>TV-14</span>
          <span>4 Seasons</span>
          <span>HD</span>
        </div>
        <div className="listItem__info-genres">
          <span>Explosive</span>
          <span>&middot;</span>
          <span>Exciting</span>
          <span>&middot;</span>
          <span>Action</span>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
