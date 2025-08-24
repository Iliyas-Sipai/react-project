import React from "react";
import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
const LoginCompo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleChange = () => {
    const payload = {
      email: email,
      password: password,
    };
    console.log(password, email);
    axios
      .post(" https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));
        alert("login is compplted");
        console.log("login is compplted", res);
        navigate("/profile");
      })
      .catch((err) => {
        console.log("login is fail");
      });
  };
  return (
    <>
      <div className="card p-4 shadow w-100 w-md-50 mx-auto">
        <h4 className="text-center text-secondary mb-4">
          🔐 User Authentication
        </h4>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="d-grid">
            <button onClick={handleChange} className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginCompo;
