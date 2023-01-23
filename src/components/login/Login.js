import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.login_container}>
    <div className={styles.login_form_container}>
        <div className={styles.left}>
            <form className={styles.form_container}
            //  onSubmit={handleSubmit}
             >
                <h1>Login to Your Account</h1>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    // onChange={handleChange}
                    // value={data.email}
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    // onChange={handleChange}
                    // value={data.password}
                    required
                    className={styles.input}
                />
                {/* {error && <div className={styles.error_msg}>{error}</div>} */}
                <button type="submit" className={styles.blue_btn}>
                    Sign In
                </button>
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
};

export default Login;