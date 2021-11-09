import React, { useState } from "react";
import styles from "./GameCard.module.scss";
import image from "../../assets/images/game__mock.png";

import GamePhoto from "./GamePhoto/GamePhoto";
import GameDescription from "./GameDescription/GameDescription";

function GameCard() {
  const [mouseOver, setMouseOver] = useState(false);
  function handlerMouseOver(value) {
    setMouseOver(value);
  }
  return (
    <div
      className={styles.game__wrapper}
      onMouseOver={() => handlerMouseOver(true)}
      onMouseLeave={() => handlerMouseOver(false)}
    >
      <GamePhoto>
        <img src={image} alt="the__witcher" />
      </GamePhoto>
      <GameDescription onMouseOver={mouseOver} />
    </div>
  );
}

export default GameCard;
