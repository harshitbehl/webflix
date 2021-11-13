import React from "react";
import { Link } from "react-router-dom";

import "./SidebarMenu.scss";

function SidebarMenu({ title, listSpec }) {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarMenu__title">{title}</h3>
      <ul className="sidebarMenu__list">
        {listSpec.map((listItem) => (
          <Link to={listItem.link || "#"}>
            <li className="sidebarMenu__listItem" key={listItem.text}>
              {listItem.icon} <span>{listItem.text}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SidebarMenu;
