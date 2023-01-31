import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER, SET_SELECTED_USER } from "../store/types/userType";

export default function UserManagement() {
  const [keyword, setKeyword] = useState({
    keyword: "",
  });

  const dispatch = useDispatch();

  const setSelectedUser = (user) => {
    dispatch({
      type: SET_SELECTED_USER,
      payload: user,
    });
  };
  const deleteUser = (user) => {
    dispatch({
      type: DELETE_USER,
      payload: user,
    });
  };

  const userList = useSelector((state) => state.userReducer.userList);

  const renderUserList = () => {
    const filteredData = userList.filter((ele) => {
      return (
        ele.fullName.toLowerCase().indexOf(keyword.keyword.toLowerCase()) !== -1
      );
    });

    return filteredData.map((ele, idx) => {
      return (
        <tr className={idx % 2 === 0 ? "bg-light" : undefined} key={ele.id}>
          <td>{idx + 1}</td>
          <td>{ele.userName}</td>
          <td>{ele.fullName}</td>
          <td>{ele.email}</td>
          <td>{ele.phoneNumber}</td>
          <td>{ele.type}</td>
          <td>
            <button
              onClick={() => setSelectedUser(ele)}
              className="btn btn-info mr-2"
            >
              EDIT
            </button>
            <button onClick={() => deleteUser(ele)} className="btn btn-danger">
              DELETE
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="card p-0 mt-3">
      <div className="card-header font-weight-bold">USER MANAGEMENT</div>
      <div className="row mt-4 px-3 ">
        <div className="col-4">
          <div className="form-group mb-0">
            <input
              type="text"
              placeholder="Search by full name..."
              className="form-control"
              onChange={(event) => setKeyword({ keyword: event.target.value })}
            />
          </div>
        </div>
        <div className="col-3 ml-auto">
          <div className="form-group mb-0">
            <select className="form-control">
              <option value="All">All</option>
              <option value="Client">Client</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Username</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderUserList()}</tbody>
        </table>
      </div>
    </div>
  );
}
