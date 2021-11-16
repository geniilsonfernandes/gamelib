import React from "react";

import styles from "./Auth.module.scss";
import img from "../../images/form__image.jpg";
import Container from "./../../components/Layout/Container";
import SignUp from "./Form/SignUp";

function Auth() {
  return (
    <Container className={styles.wrapper}>
      <div className={styles.auth}>
        <div className={styles.left}>
          <img src={img} alt="form bg" className={styles.photo} />
        </div>
        <div className={styles.right}>
          <SignUp />
        </div>
      </div>
    </Container>
  );
}

export default Auth;
