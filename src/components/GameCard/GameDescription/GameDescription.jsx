import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import useTitleOffset from "../Hooks/useTitleOffset";
import styles from "./GameDescription.module.scss";

function GameDescription({ onMouseOver }) {
  const gameTitleEl = useRef(null);
  const { titleMove } = useTitleOffset(gameTitleEl);

  useEffect(() => {
    titleMove(onMouseOver);
  }, [onMouseOver, titleMove]);

  return (
    <div className={styles.description}>
      <div className={styles.game}>
        <Link to="/" ref={gameTitleEl}>
          The Witcher 3: Wild Hunt
        </Link>
        <span>CD Project Red</span>
      </div>
    </div>
  );
}

export default GameDescription;
