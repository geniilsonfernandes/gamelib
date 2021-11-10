import React from "react";
import BigBanner from "../../components/banners/BigBanner/BigBanner";
import BlogDisplay from "../../components/blog/BlogDisplay/BlogDisplay";
import MainContainer from "../../components/Layout/MainContainer";
import GamesSlider from "./GamesSlider/GamesSlider";
import Header from "./Header/Header";

function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <GamesSlider highlight="now" title="and Trending" />
        <BigBanner />
        <BlogDisplay />
        <GamesSlider title="Adventures" />
        <GamesSlider title="RPG" />
      </MainContainer>
    </>
  );
}

export default Home;
