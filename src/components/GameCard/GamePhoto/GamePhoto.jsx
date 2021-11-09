import React from "react";
import Votes from "../Votes/Votes";
import styles from "./GamePhoto.module.scss";

function GamePhoto({ children }) {
  return (
    <div className={styles.game__photo}>
      <div
        className={styles.game__state}
        style={{ background: `#44d653` }}
      ></div>
      <div className={styles.menu__top}>
        <Votes />
      </div>
      {children}
      <div className={styles.menu__bottom}>
        <button className={styles.state__button}> Mee</button>
        <button className={styles.state__button}> Playing</button>
        <button className={styles.state__button}> Played</button>
      </div>
    </div>
  );
}

export default GamePhoto;
