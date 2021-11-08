import React from "react";
import styles from "./Container.module.css";
function Container({ children, classCss }) {
  return <div className={`${styles.container} ${classCss}`}>{children}</div>;
}


export default Container;
