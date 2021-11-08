import React from "react";
import { ArrowDonwIcon } from "../../../assets/Icons";
import styles from "./user.module.scss";

function User() {
  return (
    <div className={styles.user} tabindex="0">
      <img
        src="https://iela.ufsc.br/sites/default/files/default_images/default-user.png"
        alt="user"
        className={styles.user__photo}
      />
      <span className={styles.user__data}>
        <h1>Kristin Watson</h1>
        <span className={styles.status}>Casual gamer</span>

        <span className={styles.arrow}>
          <ArrowDonwIcon />
        </span>
      </span>
    </div>
  );
}

export default User;
