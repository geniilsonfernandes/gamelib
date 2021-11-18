import React from "react";
import Container from "../../components/Layout/Container";
import Notices from "../../components/blog/Notices/Notices";
import GamesSlider from "./GamesSlider/GamesSlider";
import Header from "./Header/Header";
import allGames from "../../data/allGames.json";
function Home() {
  return (
    <>
      <Header />
      <Container wrapper="main">
        <GamesSlider title="Trending games" games={allGames} />
        <Notices />
        <GamesSlider title="RPG" games={allGames} />
        <GamesSlider title="Action" games={allGames} />
      </Container>
    </>
  );
}

export default Home;
