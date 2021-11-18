import React from "react";
import { ArrowDonwIcon } from "../../../../Icons/Icon";
import styles from "./user.module.scss";

function User() {
  return (
    <div className={styles.user} tabIndex="0">
      <img
        src="https://randomuser.me/api/portraits/women/86.jpg"
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
