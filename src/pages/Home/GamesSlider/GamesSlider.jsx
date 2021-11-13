import React, { useEffect, useRef, useState } from "react";
import GameCard from "../../../components/GameCard/GameCard";
import { ArrowIcon } from "../../../Icons/Icon";
import styles from "./GamesSlider.module.scss";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

function GamesSlider({ title, games }) {
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const prevEl = useRef(null);
  const nextEl = useRef(null);

  useEffect(() => {
    setNext(nextEl.current);
    setPrev(prevEl.current);
  }, [nextEl, prev]);

  return (
    <>
      <div className={styles.s__slider}>
        <div className={styles.head}>
          <h2 className={styles.title}>{title}</h2>
          <hr />
          <div className={styles.control}>
            <button className={styles.control__button} name="prev" ref={prevEl}>
              <ArrowIcon />
            </button>
            <button className={styles.control__button} name="next" ref={nextEl}>
              <ArrowIcon />
            </button>
          </div>
        </div>
        <Swiper
          // breakpoints={slideResposiveConfig}
          slidesPerView={1}
          className={styles.slide}
          width={224}
          spaceBetween={16}
          wrapperTag="div"
          navigation={{
            prevEl: prev,
            nextEl: next,
          }}
        >
          {games &&
            games.map((game) => (
              <SwiperSlide key={game.id}>
                <GameCard
                  title={game.title}
                  cover={game.cover}
                  votes={game.rating}
                  publisher={game.publisher}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
}

export default GamesSlider;
