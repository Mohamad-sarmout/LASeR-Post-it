import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { signin } from "../../actions/UserActions";
import { useState } from "react";
import { directus } from "../../server/directus";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setuserData] = useState({ email: "", password: "" });
  const handleSignIn = async (event) => {
    event.preventDefault();
    dispatch(signin(userData, navigate));
  };
  const handleChange = (event) => {
    setuserData({ ...userData, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form
            className={styles.form_container}
            //  onSubmit={handleSubmit}
          >
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={userData.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={userData.password}
              required
              className={styles.input}
            />
            {/* {error && <div className={styles.error_msg}>{error}</div>} */}
            <Link to="/Home">
              {" "}
              <button
                type="submit"
                className={styles.blue_btn}
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </Link>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={styles.white_btn}>
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
