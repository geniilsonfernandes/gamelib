import React from "react";

import styles from "./ButtonSmall.module.scss";

function ButtonSmall({ children, highlight }) {
  return (
    <button className={styles.btn} data-highlight={true && highlight}>
      {children}
    </button>
  );
}

export default ButtonSmall;
