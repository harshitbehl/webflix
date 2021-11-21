import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./List.scss";

function List() {
  const location = useLocation();
  const list = location.list;

  return (
    <div className="product">
      <div className="product__header">
        <h2 className="product__title">List</h2>
        <Link to="/newList">
          <button className="product__create-button">Create</button>
        </Link>
      </div>

      <div className="product__body">
        {/* Top */}
        <div className="product__body-top">
          <div className="product__info-container">
            <div className="product__info-titleContainer">
              <span>{list.title}</span>
            </div>
            <div className="product__info-details">
              <p>
                ID: <span>{list._id}</span>
              </p>
              <p>
                Genre: <span>{list.genre}</span>
              </p>
              <p>
                Type: <span>{list.type}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="product__body-bottom">
          <form>
            <div className="product__bottomForm-left">
              <label>List Title</label>
              <input type="text" placeholder={list.title} />
              <label>Type</label>
              <input type="text" placeholder={list.type} />
              <label>Genre</label>
              <input type="text" placeholder={list.genre} />
            </div>
            <div className="product__bottomForm-right">
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default List;
