import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const ProtfolioWrap = styled.article`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 8rem);
  justify-content: center;
  align-items: center;
  .mainTitle {
    width: 100%;
    > h3 {
      font-size: var(--head-font);
      span {
        color: var(--point-color);
      }
    }
    border-bottom: 1px solid var(--gray-color);
  }
  .swiper {
    width: 100%;
    height: 100%;
    color : #000;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      /* Center slide text vertically */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Portfolio = () => {
  return (
    <ProtfolioWrap>
      <div className="mainTitle">
        <h3>
          Project <span>Portfolio</span>
        </h3>
      </div>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </ProtfolioWrap>
  );
};

export default Portfolio;
