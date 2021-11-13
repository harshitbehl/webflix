import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import { rows } from "../../datagridData/usersDummyData";
import { Link } from "react-router-dom";

import "./Users.scss";

function Users() {
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
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="users__user-cell">
            <Avatar src={params.row.avatar} />
            <span>{params.row.username}</span>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="users__action-cell">
            <Link to={`/user/${params.row.id}`}>
              <button>Edit</button>
            </Link>
            <DeleteOutline
              className="users__action-cell-delete"
              onClick={() => deleteHandler(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="users">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        className="users__dataGrid"
      />
    </div>
  );
}

export default Users;
