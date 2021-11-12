import React from "react";
import styles from "./GameCard.module.scss";
import image from "../../images/game__mock.png";
import GamePhoto from "./GamePhoto/GamePhoto";
import GameDescription from "./GameDescription/GameDescription";

const game = {
  title: "The Witcher 3: Wild Hunt",
  publisher: "CD Project Red",
  votes: 1,
};

function GameCard() {
  return (
    <div className={styles.game__wrapper}>
      <GamePhoto photo={image} alt={game.title} votes={game.votes}></GamePhoto>
      <GameDescription title={game.title} publisher={game.publisher} />
    </div>
  );
}

export default GameCard;
