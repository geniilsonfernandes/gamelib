import React from "react";
import { Link } from "react-router-dom";
import styles from "./GameDescription.module.scss";

function GameDescription({ publisher, title }) {
  const game = title.length > 25 ? title.substring(0, 23) + "..." : title;
  return (
    <div className={styles.description}>
      <div className={styles.game}>
        <Link to="/">{game}</Link>
        <span>{publisher}</span>
      </div>
    </div>
  );
}

export default GameDescription;
