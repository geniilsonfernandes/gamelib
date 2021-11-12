import React from "react";
import styles from "./Container.module.css";
function Container({ children, className, wrapper }) {
  const HmtlTag = wrapper || "div";
  return (
    <HmtlTag className={`${styles.container} ${className}`}>{children}</HmtlTag>
  );
}

export default Container;
