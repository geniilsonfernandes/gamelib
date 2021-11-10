import React from "react";
import BigBanner from "../../components/banners/BigBanner/BigBanner";
import MainContainer from "../../components/Layout/MainContainer";
import GamesSlider from "./GamesSlider/GamesSlider";
import Header from "./Header/Header";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <GamesSlider />
        <BigBanner />
      </MainContainer>
    </>
  );
}

export default Home;
