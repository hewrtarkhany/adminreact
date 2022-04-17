import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { userRows } from "../dummyData";
import { useState } from "react";

export default function UserList() {

  const [data, setData] = useState(userRows);

  const columns = [
    {
      field: "id",
      headerName: "#",
      width: 90
      
    },
    
    {
      field: "netid",
      headerName: "netID",
      width: 150
    },
    {
      field: "username",
      headerName: "Name",
      width: 150,
     
    },
    {
      field: "email",
      headerName: "Email",
      width: 200
    },
    {
      field: "class",
      headerName: "Class",
      width: 120,
    },
    {
      field: "topic",
      headerName: "Topics",
      width: 300,
    },

  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
