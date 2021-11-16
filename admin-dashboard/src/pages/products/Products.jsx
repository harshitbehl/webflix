import React, { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context/movieContext/MovieContext";
import { deleteMovie, getMovies } from "../../context/movieContext/apiCalls";

import "./Products.scss";

function Products() {
  const { movies, dispatch } = useContext(MovieContext);

  useEffect(() => {
    getMovies(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteMovie(id, dispatch);
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "movie",
      headerName: "Movie",
      width: 280,
      renderCell: (params) => {
        return (
          <div className="products__product-cell">
            <div className="products__image-container">
              <img className="products__image" src={params.row.img} alt="" />
            </div>
            <span>{params.row.title}</span>
          </div>
        );
      },
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 120,
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 120,
    },
    {
      field: "duration",
      headerName: "Duration",
      width: 130,
    },
    {
      field: "isTvShow",
      headerName: "TV Show",
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="products__action-cell">
            <Link
              to={{ pathname: "/product/" + params.row._id, movie: params.row }}
            >
              <button>Edit</button>
            </Link>
            <DeleteOutline
              className="products__action-cell-delete"
              onClick={() => deleteHandler(params.row._id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="products">
      <DataGrid
        rows={movies}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        getRowId={(r) => r._id}
        className="products__dataGrid"
      />
    </div>
  );
}

export default Products;
