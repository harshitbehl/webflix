import React, { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../../components/listItem/ListItem";
import "./List.scss";

function List({ list }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);
  const listRef = useRef();

  const clickHandler = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 72;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${222 + distance}px)`;
    } else if (direction === "right" && slideNumber < 10 - clickLimit) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-222 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <p className="list__title">{list.title}</p>
      <div className="list__wrapper">
        <div
          className="list__arrowLeft-container"
          onClick={() => clickHandler("left")}
        >
          <ArrowBackIosOutlined className="list__arrowLeft-icon" />
        </div>

        <div className="list__container" ref={listRef}>
          {list.content.map((item) => (
            <ListItem item={item} />
          ))}
        </div>
        <div
          className="list__arrowRight-container"
          onClick={() => clickHandler("right")}
        >
          <ArrowForwardIosOutlined className="list__arrowRight-icon" />
        </div>
      </div>
    </div>
  );
}

export default List;
