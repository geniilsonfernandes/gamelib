import React from "react";
import { Link } from "react-router-dom";
import { GoogleIcon, LookIcon, MailIcon } from "../../../Icons/Icon";
import Term from "../Term/Term";
import styles from "./Form.module.scss";
import InputForm from "./InputForm/InputForm";
function LogIn() {
  return (
    <div className={styles.form}>
      <div className={styles.type}>
        Don't have a account? <Link to="/auth/signup"> Sign Up</Link>
      </div>
      <h1>login || Get started with easily register</h1>
      <p>Free register and you can enjoy it</p>
      <form action="" className={styles.form__control}>
        <InputForm placeholder="Email" type="email" Icon={MailIcon} />
        <InputForm placeholder="Password" type="password" Icon={LookIcon} />
        <div className={styles.form__buttons}>
          <button className={styles.submit}> Log In</button> <span>or</span>
          <button className={styles.icon__btn}>
            <GoogleIcon />
          </button>
        </div>
      </form>
      <Term />
    </div>
  );
}

export default LogIn;
