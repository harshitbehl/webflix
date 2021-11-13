import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { rows } from "../../datagridData/productsDummyData";
import { Link } from "react-router-dom";

import "./Products.scss";

function Products() {
  const [data, setData] = useState(rows);

  const deleteHandler = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "product",
      headerName: "Product",
      width: 340,
      renderCell: (params) => {
        return (
          <div className="products__product-cell">
            <div className="products__image-container">
              <img className="products__image" src={params.row.image} alt="" />
            </div>
            <span>{params.row.name}</span>
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="products__action-cell">
            <Link to={`/product/${params.row.id}`}>
              <button>Edit</button>
            </Link>
            <DeleteOutline
              className="products__action-cell-delete"
              onClick={() => deleteHandler(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className="products__dataGrid"
      />
    </div>
  );
}

export default Products;
