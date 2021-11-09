import React from "react";
import GameCard from "../../../components/GameCard/GameCard";
import Container from "../../../components/Layout/Container";
import styles from "./GamesSlider.module.scss";

function GamesSlider() {
  return (
    <Container>
      <div className={styles.grid}>
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </Container>
  );
}

export default GamesSlider;
