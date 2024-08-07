import React from "react";
import "./index.css";
import Header from "./assets/Register.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow bg-light px-5 pb-5 rounded w-40">
        <img alt="..." src={Header} style={{ width: "340px" }} />
        <form action="">
          <div className="mb-4">
            <label htmlFor="username">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="form-control rounded-2 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
              className="form-control rounded-2 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-2 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <strong>Confirm Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-2 shadow-sm"
            />
          </div>
          <input type="checkbox" className="mt-4" id="terms" name="terms" />
          <label for="terms" style={{ marginLeft: "8px" }}>
            I Agree with privacy and policy
          </label>
          <Link
            to="/"
            className="btn btn-dark w-100 rounded-2 mb-2 shadow-sm mt-1"
          >
            Register
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
