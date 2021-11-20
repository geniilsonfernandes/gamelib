import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Container from "./../../components/Layout/Container";
import styles from "./Results.module.scss";
import { Link } from "react-router-dom";
import Header from "./Header/Header";
import GameCard from "./../../components/GameCard/GameCard";

const key = "65fbd76f50e342e8bd866b7e28d30e75";
const ghost = new Array(20).fill(null).map((_, i) => i);
function Results() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rawg.io/api/games?&search=${params.id}&key=${key}`
        );
        const data = await response.json();
        setData(data.results);
        console.log(data);
        setLoading(false);
      } catch (error) {}
    };
    fetchGames();
  }, [params.id]);

  return (
    <Container wrapper="main">
      <div className={styles.bread}>
        <Link to="/"> {"< Back to home"}</Link> | {params.id}
      </div>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.grid}>
          {loading
            ? ghost.map((id, i) => (
                <span key={i} className={styles.skeleton}></span>
              ))
            : data &&
              data.map((game) => (
                <GameCard
                  key={game.id}
                  title={game.name}
                  cover={game.background_image}
                  votes={game.rating}
                  publisher={game.released}
                />
              ))}
        </div>
      </div>
    </Container>
  );
}

export default Results;
