import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../chartData/dummyData";
import { ArrowUpward } from "@material-ui/icons";

import "./Product.scss";

function Product() {
  return (
    <div className="product">
      <div className="product__header">
        <h2 className="product__title">Product</h2>
        <Link to="/newProduct">
          <button className="product__create-button">Create</button>
        </Link>
      </div>

      <div className="product__body">
        {/* Top */}
        <div className="product__body-top">
          <Chart title="Product Sales" data={productData} dataKey="Sales" />

          <div className="product__info-container">
            <div className="product__info-titleContainer">
              <div className="product__info-imageContainer">
                <img
                  src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </div>
              <span>Apple iPhone 12 Pro Max</span>
            </div>
            <div className="product__info-details">
              <p>
                ID: <span>1</span>
              </p>
              <p>
                Sales: <span>3000</span>
              </p>
              <p>
                Active: <span>Yes</span>
              </p>
              <p>
                In Stock: <span>No</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="product__body-bottom">
          <form>
            <div className="product__bottomForm-left">
              <label>Product Name</label>
              <input type="text" placeholder="Apple iPhone 12 Pro Max" />
              <label>In Stock</label>
              <select name="inStock" id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <label>Active</label>
              <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className="product__bottomForm-right">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
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
