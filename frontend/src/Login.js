import React from "react";
import "./index.css";
import Logo from "./assets/Logo.png";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow bg-light px-5 pb-5 rounded w-40">
        <img alt="..." src={Logo} style={{ width: "340px" }} />
        <form action="">
          <div className="mb-4">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
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
          <button className="btn btn-dark w-100 rounded-2 mt-4 shadow-sm">
            Log in
          </button>
          <p className="mt-4">
            Don't have an account?{" "}
            <strong style={{ color: "#9667e0", marginLeft: "4px" }}>
              {" "}
              Sign up
            </strong>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
