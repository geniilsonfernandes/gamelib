import React from "react";
import BigBanner from "../../banners/BigBanner/BigBanner";
import BlogDisplay from "../BlogDisplay/BlogDisplay";
import Head from "../../Head/Head";
import games from "../../../data/games.json";
import article from "../../../data/article.json";

function Notices() {
  const gameBanner = games.filter((game) => game.id === 1);

  return (
    <section style={{ position: "relative" }}>
      <Head title="Last notices" />

      <BigBanner
        title={gameBanner[0].title}
        description={gameBanner[0].description}
        publisher={gameBanner[0].publisher}
        background={gameBanner[0].background__url}
      />
      <BlogDisplay articles={article} />
    </section>
  );
}

export default Notices;
