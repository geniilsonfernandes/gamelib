import React from "react";
import { GridIcon, ListIcon } from "../../../Icons/Icon";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <span>({3434}) Results</span>
      <div className={styles.view}>
        <div className={styles.toggle}>
          <span className={styles.toggle__icon} data-active={true}>
            <GridIcon />
          </span>
          <span className={styles.toggle__icon} data-active={false}>
            <ListIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
