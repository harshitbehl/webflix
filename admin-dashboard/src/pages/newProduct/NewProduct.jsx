import React from "react";

import "./NewProduct.scss";

function NewProduct() {
  return (
    <div className="newProduct">
      <div className="newProduct__header">
        <h2 className="newProduct__title">New Product</h2>
      </div>

      <div className="newProduct__body">
        <form className="newProduct__form">
          <label>Image</label>
          <input type="file" id="newProductImage" />
          <label>Name</label>
          <input type="text" placeholder="Apple iPhone 12 Pro Max" />
          <label>Stock</label>
          <input type="text" placeholder="20" />
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
          <button>Create</button>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
