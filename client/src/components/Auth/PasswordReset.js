import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleImg from "../../assets/images/forgot-password.svg";
import axios from "axios";
import { Url } from "../../Global_variable/api_link";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email address");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    try {
      await axios.post(Url + "/forgot_password", { email });
      alert("Verification email sent!");
    } catch (error) {
      console.error(error);
      setError("Failed to send verification email");
    }
  };

  return (
    <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
      <div
        className="w-100 p-3 p-md-5 card border-0 bg-dark text-light"
        style={{ maxWidth: "32rem" }}
      >
        <form onSubmit={handleSubmit} className="row g-1 p-3 p-md-4">
          <div className="col-12 text-center mb-1 mb-lg-5">
            <img src={GoogleImg} className="w240 mb-4" alt="" />
            <h1>Forgot password?</h1>
            <span>
              Enter the email address you used when you joined and we'll send
              you instructions to reset your password.
            </span>
          </div>
          <div className="col-12">
            <div className="mb-2">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button
              type="submit"
              to="2-step-authentication"
              title=""
              className="btn btn-lg btn-block btn-light lift text-uppercase"
            >
              SUBMIT
            </button>
          </div>
          {error && (
            <div className="col-12 text-center mt-4">
              <span className="text-danger">{error}</span>
            </div>
          )}
          <div className="col-12 text-center mt-4">
            <span className="text-muted">
              <Link to="sign-in" className="text-secondary">
                Back to Sign in
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
