import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
import { createuser } from "../../actions/UserActions";
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setuserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleSignUp = async (event) => {
    event.preventDefault();
    dispatch(createuser(userData, navigate));
  };
  const handleChange = (event) => {
    setuserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form
            className={styles.form_container}
            // onSubmit={handleSubmit}
          >
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="First Name"
              name="username"
              // onChange={handleChange}
              // value={data.firstName}
              required
              onChange={handleChange}
              value={userData.username}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              // onChange={handleChange}
              // value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              // onChange={handleChange}
              // value={data.email}
              onChange={handleChange}
              required
              value={userData.email}
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              // onChange={handleChange}
              // value={data.password}
              required
              onChange={handleChange}
              value={userData.password}
              className={styles.input}
            />
            {/* {error && <div className={styles.error_msg}>{error}</div>} */}{" "}
            <button
              type="submit"
              className={styles.blue_btn}
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
