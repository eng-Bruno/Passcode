import React from "react";
import "./index.css";
import Header from "./assets/Register.png";
import { Link } from "react-router-dom";
import Validation from "./RegisterValidation";
import { useState } from "react";

function Register() {
  const [values, setValues] = useState({
    name: "",
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
        <img alt="..." src={Header} style={{ width: "340px" }} />
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={handleInput}
              className="form-control rounded-2 shadow-sm"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="name@example.com"
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
            <input
              type="password"
              name="password"
              onChange={handleInput}
              placeholder="Enter Password"
              className="form-control rounded-2 shadow-sm"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <input type="checkbox" className="mt-4" id="terms" name="terms" />
          <label for="terms" style={{ marginLeft: "8px" }}>
            I Agree with privacy and policy
          </label>
          <button
            type="submit"
            className="btn btn-dark w-100 rounded-2 mb-2 shadow-sm mt-1"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
