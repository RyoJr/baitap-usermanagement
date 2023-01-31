import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { ADD_USER } from "../store/types/userType";

export default function RegisterForm() {
  const [state, setState] = useState({
    userName: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "Client",
  });
  const [error, setError] = useState({
    userName: "",
    fullName: "",
    password: "",
    phoneNumber: "",
    email: "",
    type: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = event.target.checkValidity();

    if (!isValid) {
      return;
    }

    dispatch({
      type: ADD_USER,
      payload: state,
    });
  };

 

  const handleBlur = (event) => {
    let message = "";
    const { name, validity, title, minLength, maxLength } = event.target;
    const { valueMissing, tooShort, tooLong, patternMismatch } = validity;

    console.log(patternMismatch);

    if (valueMissing) {
      message = `${title} is required.`;
    }
    if (tooShort || tooLong) {
      message = `${title} from ${minLength}-${maxLength} characters. `;
    }
    if (patternMismatch) {
      message = `${title} is invalid pattern.`;
    }

    if (tooShort) {
      message = `${title} from ${minLength} characters. `;
    }

    setError({
      ...error,
      [name]: message,
    });
  };

  const { userName, fullName, password, phoneNumber, email, type } =
    error || {};

  return (
    <div className="card p-0">
      <div className="card-header bg-warning text-white font-weight-bold">
        REGISTER FORM
      </div>
      <div className="card-body">
        <form
          noValidate
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label>Username</label>
                <input
                  //   value={userName}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="userName"
                  title="Username"
                  onBlur={handleBlur}
                  required
                />
                <span className="text-danger">{userName}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  //   value={fullName}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="fullName"
                  title="Full Name"
                  onBlur={handleBlur}
                  required
                  minLength={5}
                  maxLength={10}
                />
                <span className="text-danger">{fullName}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Password</label>
                <input
                  //   value={password}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="password"
                  title="Password"
                  onBlur={handleBlur}
                  required
                  minLength={6}
                />
                <span className="text-danger">{password}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  //   value={phoneNumber}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  title="Phone Number"
                  onBlur={handleBlur}
                  required
                  pattern="[0-9]{10}$"
                />
                <span className="text-danger">{phoneNumber}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Email</label>
                <input
                  //   value={email}
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="email"
                  title="Email"
                  onBlur={handleBlur}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                />
                <span className="text-danger">{email}</span>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Type</label>
                <select
                  //   value={type}
                  onChange={handleChange}
                  className="form-control"
                  name="type"
                  onBlur={handleBlur}
                  required
                >
                  <option>Client</option>
                  <option>Admin</option>
                </select>
                <span className="text-danger">{type}</span>
              </div>
            </div>
          </div>

          <div className="card-footer text-muted">
            <button className="btn btn-warning mr-2">SAVE</button>
            <button type="reset" className="btn btn-outline-dark">
              RESET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
