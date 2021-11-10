import React from "react";
import GameCard from "../../../components/GameCard/GameCard";
import Container from "../../../components/Layout/Container";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination]);

const games = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function GamesSlider() {
  const slideResposiveConfig = {
    // when window width is >= 640px
    375: {
      spaceBetween: 10,
      slidesPerView: 2,
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

  return (
    <Container>
      <Swiper
        breakpoints={slideResposiveConfig}
        slidesPerView={2}
        spaceBetween={16}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        wrapperTag="div"
        navigation={{
          prevEl: null,
          nextEl: null,
        }}
      >
        {games.map((id) => (
          <SwiperSlide>
            <GameCard key={id} />
          </SwiperSlide>
        ))}
      </Swiper>
      <GameCard />
    </Container>
  );
}

export default GamesSlider;
