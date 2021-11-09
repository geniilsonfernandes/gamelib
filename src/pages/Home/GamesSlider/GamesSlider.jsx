import React from "react";
import GameCard from "../../../components/GameCard/GameCard";
import Container from "../../../components/Layout/Container";

function GamesSlider() {
  return (
    <Container>
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </Container>
  );
}

export default GamesSlider;
