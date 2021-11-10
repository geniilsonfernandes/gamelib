import React from "react";
import BigBanner from "../../components/banners/BigBanner/BigBanner";
import GamesSlider from "./GamesSlider/GamesSlider";
import Header from "./Header/Header";

function Home() {
  return (
    <>
      <Header />
      <GamesSlider />
      <BigBanner />
    </>
  );
}

export default Home;
