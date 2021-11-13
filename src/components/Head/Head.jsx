import React from "react";
import styles from "./Head.module.scss";

function Head({ title }) {
  return (
    <div className={styles.head}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <hr />
    </div>
  );
}

export default Head;
