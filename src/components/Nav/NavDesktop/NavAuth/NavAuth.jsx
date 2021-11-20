import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavAuth.module.scss";
function NavAuth() {
  return (
    <div className={styles.auth}>
      <Link highlight={false} to="auth/login" className={styles.link} data-highlight="false">
        Log in
      </Link>
      <Link to="auth/signup" className={styles.link}>Sign up</Link>
    </div>
  );
}

export default NavAuth;
