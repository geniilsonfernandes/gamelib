import React from "react";
import { Link } from "react-router-dom";
import styles from "./GenreCard.module.scss";
function GenreCard({ image, genre, color }) {
  return (
    <Link to="/" className={styles.genre__card}>
      <h2>{genre}</h2>
      <span
        className={styles.card__tag}
        style={{ backgroundColor: `${color}` }}
      ></span>
      <img src={image} alt={genre} />
    </Link>
  );
}

export default GenreCard;
