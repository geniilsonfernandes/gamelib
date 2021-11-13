import React from "react";
import styles from "./GameCard.module.scss";
import GamePhoto from "./GamePhoto/GamePhoto";
import GameDescription from "./GameDescription/GameDescription";

function GameCard({ title, cover, votes, publisher }) {
  return (
    <div className={styles.game__wrapper}>
      <GamePhoto image={cover} alt={title} votes={votes}></GamePhoto>
      <GameDescription title={title} publisher={publisher} />
    </div>
  );
}

export default GameCard;
