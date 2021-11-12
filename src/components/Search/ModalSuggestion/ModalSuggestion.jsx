import React from "react";
import styles from "./ModalSuggestion.module.scss";
import image from "../../../images/genres/adventure__genre.png";
import GenreCard from "./GenreCard/GenreCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ModalSuggestion() {
  return (
    <motion.div
      className={styles.modal}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.head}>Top genres</div>
      <div className={styles.genres__grid}>
        <GenreCard genre="Adventures" image={image} />
        <GenreCard genre="Adventures" image={image} />
        <GenreCard genre="Adventures" image={image} />
        <div className={styles.action}>
          <Link to="/">See all</Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ModalSuggestion;
