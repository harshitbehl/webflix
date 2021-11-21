import React, { useContext, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ListContext } from "../../context/listContext/ListContext";
import { getLists, deleteList } from "../../context/listContext/apiCalls";

import "./Lists.scss";

function Lists() {
  const { lists, dispatch } = useContext(ListContext);

  useEffect(() => {
    getLists(dispatch);
  }, [dispatch]);

  const deleteHandler = (id) => {
    deleteList(id, dispatch);
  };

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      width: 250,
    },
    {
      field: "title",
      headerName: "Title",
      width: 300,
    },
    {
      field: "type",
      headerName: "Type",
      width: 150,
    },
    {
      field: "genre",
      headerName: "Genre",
      width: 150,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="products__action-cell">
            <Link
              to={{ pathname: "/list/" + params.row._id, list: params.row }}
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
        rows={lists}
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

export default Lists;
