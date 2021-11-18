import React from "react";
import { Link } from "react-router-dom";
import { GoogleIcon, LookIcon, MailIcon, UserIcon } from "../../../Icons/Icon";
import styles from "./Form.module.scss";
import InputForm from "./InputForm/InputForm";
import Term from "./../Term/Term";

function SignUp({ type }) {
  return (
    <div className={styles.form}>
      <div className={styles.type}>
        Do you have account? <Link to="/auth/login"> {type} Sign in</Link>
      </div>
      <h1>Get started with easily register</h1>
      <p>Free register and you can enjoy it</p>
      <form action="" className={styles.form__control}>
        <InputForm placeholder="Username" type="text" Icon={UserIcon} />
        <InputForm placeholder="Email" type="email" Icon={MailIcon} />
        <InputForm placeholder="Password" type="password" Icon={LookIcon} />
        <div className={styles.form__buttons}>
          <button className={styles.submit}> Sign up</button> <span>or</span>
          <button className={styles.icon__btn}>
            <GoogleIcon />
          </button>
        </div>
      </form>
      <Term />
    </div>
  );
}

export default SignUp;
