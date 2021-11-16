import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpward } from "@material-ui/icons";

import "./Product.scss";

function Product() {
  const location = useLocation();
  const movie = location.movie;

  return (
    <div className="product">
      <div className="product__header">
        <h2 className="product__title">Movie</h2>
        <Link to="/newProduct">
          <button className="product__create-button">Create</button>
        </Link>
      </div>

      <div className="product__body">
        {/* Top */}
        <div className="product__body-top">
          <div className="product__info-container">
            <div className="product__info-titleContainer">
              <div className="product__info-imageContainer">
                <img src={movie.img} alt="" />
              </div>
              <span>{movie.title}</span>
            </div>
            <div className="product__info-details">
              <p>
                ID: <span>{movie._id}</span>
              </p>
              <p>
                Genre: <span>{movie.genre}</span>
              </p>
              <p>
                Duration: <span>{movie.duration}</span>
              </p>
              <p>
                Rating: <span>{movie.rating}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="product__body-bottom">
          <form>
            <div className="product__bottomForm-left">
              <label>Movie Title</label>
              <input type="text" placeholder={movie.title} />
              <label>Genre</label>
              <input type="text" placeholder={movie.genre} />
              <label>Duration</label>
              <input type="text" placeholder={movie.duration} />
              <label>Rating</label>
              <input type="text" placeholder={movie.rating} />
              <label>Trailer</label>
              <input type="file" placeholder={movie.trailer} />
              <label>Video</label>
              <input type="file" placeholder={movie.video} />
            </div>
            <div className="product__bottomForm-right">
              <div>
                <img
                  src={movie.img}
                  alt=""
                />
              </div>
              <label htmlFor="productImgUpload">
                <ArrowUpward /> <span>Upload</span>
              </label>
              <input type="file" id="productImgUpload" />
              <button>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Product;
