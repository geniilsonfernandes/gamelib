import React from "react";
import styles from "./Container.module.css";
function Container({ children, style }) {
  return <div className={`${styles.container} ${style}`}>{children}</div>;
}

export default Container;
