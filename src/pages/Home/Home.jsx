import React from "react";
import Container from "../../components/Layout/Container";
import Notices from "../../components/blog/Notices/Notices";
import GamesSlider from "./GamesSlider/GamesSlider";
import Header from "./Header/Header";

function Home() {
  return (
    <>
      <Header />
      <Container wrapper="main">
        <GamesSlider title="Trending games" />
        <Notices />
        <GamesSlider title="RPG" />
      </Container>
    </>
  );
}

export default Home;
