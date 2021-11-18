import React from "react";
import ButtonSmall from "../../../buttons/ButtonSmall/ButtonSmall";
import styles from "./NavAuth.module.scss";
function NavAuth() {
  return (
    <div className={styles.auth}>
      <ButtonSmall highlight={false} path="auth/login">
        Log in
      </ButtonSmall>
      <ButtonSmall path="auth/signup">Sign up</ButtonSmall>
    </div>
  );
}

export default NavAuth;
