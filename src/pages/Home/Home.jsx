import React from "react";
import MainContainer from "../../components/Layout/MainContainer";
import Notices from "../../components/Notices/Notices";
import GamesSlider from "./GamesSlider/GamesSlider";
import Header from "./Header/Header";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <GamesSlider title="Trending games" />
        <Notices />
        <GamesSlider title="Adventures" />
        <GamesSlider title="RPG" />
      </MainContainer>
    </>
  );
}

export default Home;
