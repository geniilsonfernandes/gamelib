import React from "react";
import styles from "./tag.module.scss";
function Tag({ children }) {
  return <span className={styles.tag}>{children}</span>;
}

export default Tag;
