import React from "react";
import styles from "./Paralax.module.scss";

function Paralax({ children }) {
  return <div className={styles.paralax}>{children}</div>;
}

export default Paralax;
