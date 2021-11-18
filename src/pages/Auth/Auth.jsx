import React from "react";
import styles from "./Auth.module.scss";
import img from "../../images/form__image.jpg";
import Container from "./../../components/Layout/Container";
import SignUp from "./Form/SignUp";
import LogIn from "./Form/LogIn";
import { Routes, Route } from "react-router-dom";

function Auth() {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.auth}>
        <div className={styles.left}>
          <img src={img} alt="form bg" className={styles.photo} />
        </div>
        <div className={styles.right}>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
          </Routes>
        </div>
      </div>
    </Container>
  );
}

export default Auth;
