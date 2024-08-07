import React from "react";
import "./index.css";
import Logo from "./assets/Logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Validation from "./LoginValidation";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow bg-light px-5 pb-5 rounded w-40">
        <img alt="..." src={Logo} style={{ width: "340px" }} />
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-2 shadow-sm"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            {/* Senha: 8 caracteres, maiúsculas, minúsculas e números */}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-2 shadow-sm"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-dark w-100 rounded-2 mt-4 shadow-sm"
          >
            Log in
          </button>
          <p className="mt-4">
            Don't have an account?{" "}
            <Link to="/register" className=" text-decoration-none">
              <strong style={{ color: "#9667e0", marginLeft: "4px" }}>
                {" "}
                Sign up
              </strong>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
