import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  const {register, handleSubmit, formState:{errors}, reset}= useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form
           onSubmit={handleSubmit(onSubmit)}
            className={styles.form_container}
          >
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              {...register("email", { required: "Email is required" })}
              className={styles.input}
            />
             <span style={{fontSize:"10px",color:"red"}}>{errors.email?.message}</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              {...register("password",{required:"Password is required",minLength:{
                value: 8,
                message: "At Least 8 Character"
              }})}
              className={styles.input}
            />
            <span style={{fontSize:"10px",color:"red"}}>{errors.password?.message}</span>
            <input type="submit" className={styles.blue_btn} />
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
