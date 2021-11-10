import React from "react";
import Votes from "../Votes/Votes";
import styles from "./GamePhoto.module.scss";
import Star from "../Star/Star";

function GamePhoto({ photo, alt, votes }) {
  return (
    <div className={styles.game__photo}>
      <div
        className={styles.game__state}
        style={{ background: `#44d653` }}
      ></div>
      <div className={styles.menu__top}>
        <Votes votes={votes} />
        <Star />
      </div>
      <img src={photo} alt={alt} />
    </div>
  );
}

export default GamePhoto;
