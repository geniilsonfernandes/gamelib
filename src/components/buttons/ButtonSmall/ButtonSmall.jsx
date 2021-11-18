import React from "react";
import { useNavigate } from "react-router";

import styles from "./ButtonSmall.module.scss";

function ButtonSmall({ children, highlight, path }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate(path || "/");
    console.log(path || "/");
  }
  return (
    <button
      className={styles.btn}
      data-highlight={true && highlight}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default ButtonSmall;
