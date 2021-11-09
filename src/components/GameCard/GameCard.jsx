import React, { useRef } from "react";
import styles from "./GameCard.module.scss";
import image from "../../assets/images/game__mock.png";
import { Link } from "react-router-dom";
import { MenuDotsIcon } from "../../assets/Icons";
import useTitleOffset from "./Hooks/useTitleOffset";
import GamePhoto from "./GamePhoto/GamePhoto";

function GameCard() {
  const gameTitleEl = useRef(null);
  const { titleMove } = useTitleOffset(gameTitleEl);

  return (
    <>
      <div
        className={styles.game__wrapper}
        onMouseOver={() => titleMove(true)}
        onMouseLeave={() => titleMove(false)}
      >
        <GamePhoto>
          <img src={image} alt="the__witcher" />
        </GamePhoto>
        <div className={styles.description}>
          <div className={styles.game}>
            <Link to="/" ref={gameTitleEl}>
              The Witcher 3: Wild Hunt adsd ad
            </Link>
            <span>CD Project Red</span>
          </div>
          {false && (
            <div className={styles.options}>
              <button>
                <MenuDotsIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default GameCard;
