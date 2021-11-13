import React from "react";
import styles from "./ModalSuggestion.module.scss";
import GenreCard from "./GenreCard/GenreCard";
import { Link } from "react-router-dom";

import genres from "../../../data/genres.json";

function ModalSuggestion() {
  return (
    <div
      className={styles.modal}

    >
      <div className={styles.head}>Top genres</div>
      <div className={styles.genres__grid}>
        {genres.map((genre) => (
          <GenreCard
            genre={genre.genre}
            image={genre.background}
            color={genre.color}
          />
        ))}
        <div className={styles.action}>
          <Link to="/">See all</Link>
        </div>
      </div>
    </div>
  );
}

export default ModalSuggestion;
