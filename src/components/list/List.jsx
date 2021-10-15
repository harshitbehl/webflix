import React from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../../components/listItem/ListItem";

function List() {
  return (
    <div className="list">
      <p className="list__title">Popular on Netflix</p>
      <div className="list__wrapper">
        <ArrowBackIosOutlined />
        <div className="list__container">
          <ListItem />
        </div>
        <ArrowForwardIosOutlined />
      </div>
    </div>
  );
}

export default List;
