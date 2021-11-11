import React, { useEffect, useRef, useState } from "react";
import GameCard from "../../../components/GameCard/GameCard";

import styles from "./GamesSlider.module.scss";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import { ArrowIcon } from "../../../assets/Icons";
SwiperCore.use([Navigation, Pagination]);

const games = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const slideResposiveConfig = {
  // when window width is >= 640px
  375: {
    spaceBetween: 10,
    slidesPerView: 1,
    width: 234,
  },
  640: {
    spaceBetween: 16,
    slidesPerView: 2,
  },
  700: {
    spaceBetween: 16,
    slidesPerView: 3,
  },
  768: {
    slidesPerView: 5,
  },
};

function GamesSlider({ title }) {
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
          width={230}
          spaceBetween={16}
          wrapperTag="div"
          navigation={{
            prevEl: prev,
            nextEl: next,
          }}
        >
          {games.map((id, i) => (
            <SwiperSlide key={i}>
              <GameCard />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default GamesSlider;
