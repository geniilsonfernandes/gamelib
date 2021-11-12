import React from "react";
import { LoadingIcon } from "../../../Icons/Icon";

import styles from "./Loading.module.scss";
function Loading() {
  return (
    <span className={styles.loading}>
      <LoadingIcon />
    </span>
  );
}

export default Loading;
