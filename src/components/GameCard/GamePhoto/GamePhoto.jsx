import React from "react";
import Votes from "../Votes/Votes";
import styles from "./GamePhoto.module.scss";
import Star from "../Star/Star";

function GamePhoto({ image, alt, votes }) {
  return (
    <div className={styles.game__photo}>
      <div
        className={styles.game__state}
        style={{ background: `var(--primary)` }}
      ></div>
      <div className={styles.menu__top}>
        <Votes votes={votes} />
        <Star />
      </div>
      <img src={image} alt={alt} />
    </div>
  );
}

export default GamePhoto;
