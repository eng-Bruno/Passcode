import React from "react";
import "./index.css";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow bg-light p-5 rounded w-40">
        <form action="">
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-0"
            />
          </div>
          <button className="btn btn-success w-100">Log in</button>
          <p>You are agree to our terms and policies?</p>
          <button className="btn btn-default border w-100">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
