import React from "react";
import styles from "./Container.module.css";
function Container({ children, ClassCss }) {
  return <div className={`${styles.container} ${ClassCss}`}>{children}</div>;
}

export default Container;
