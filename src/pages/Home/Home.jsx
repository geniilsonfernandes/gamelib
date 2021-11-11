import React from "react";
import BigBanner from "../../components/banners/BigBanner/BigBanner";
import BlogDisplay from "../../components/blog/BlogDisplay/BlogDisplay";
import MainContainer from "../../components/Layout/MainContainer";
import Paralax from "../../components/Paralax/Paralax";
import GamesSlider from "./GamesSlider/GamesSlider";
import Header from "./Header/Header";
import img from "../../assets/images/game__mock_04.png";
import styles from "./Home.module.scss";
function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <GamesSlider highlight="now" title="and Trending" />
        <BigBanner />
        <div className={styles.grid}>
          <Paralax
            img={img}
            force={7}
            height={"300px"}
            width={"100%"}
          ></Paralax>
        </div>

        <BlogDisplay />
        <GamesSlider title="Adventures" />
        <GamesSlider title="RPG" />
      </MainContainer>
    </>
  );
}

export default Home;
