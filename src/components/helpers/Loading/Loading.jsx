import React from "react";
import { LoadingIcon } from "../../../assets/Icons";
import styles from './Loading.module.scss'
function Loading() {
  return (
    <span className={styles.loading}>
      <LoadingIcon />
    </span>
  );
}

export default Loading;
