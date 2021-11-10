import React from "react";
import styles from "./Container.module.css";
function MainContainer({ children }) {
  return <main className={styles.container}>{children}</main>;
}

export default MainContainer;
