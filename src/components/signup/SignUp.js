import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUp.module.css";
import { useForm } from 'react-hook-form'
function SignUp() {
  const {register, handleSubmit, formState:{errors}, reset}= useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset()
  }
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
          onSubmit={handleSubmit(onSubmit)}
            className={styles.form_container}
          >
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="User Name"
              name="UserName"  

              {...register("UserName", { required: "UserName is required" })}
              className={styles.input}
            />
            <span style={{fontSize:"10px",color:"red"}}>{errors.UserName?.message}</span>
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
              {...register("password",{required:"Password is required",minLength:{
                value: 8,
                message: "At Least 8 Character"
              }})}
              placeholder="Password"
              name="password"
              className={styles.input}
            />
            <span style={{fontSize:"10px",color:"red"}}>{errors.password?.message}</span>
            <input type="submit" className={styles.blue_btn} />
          </form>
        </div>
      </div>
    </div>
  );
} 

export default SignUp;
