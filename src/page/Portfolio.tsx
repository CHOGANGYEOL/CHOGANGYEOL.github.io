import styled from "styled-components";
import { PortfolioData } from "../data/PortfolioData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <ProtfolioWrap>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          765: {
            slidesPerView: 2,
          },
          1100: {
            slidesPerView: 4,
          },
        }}
        // slidesPerView={4}
        className="mySwiper"
      >
        {PortfolioData.map((el, idx) => {
          return (
            <SwiperSlide key={"swiper" + idx}>
              <Link to={el.link} className="contents">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProtfolioWrap>
  );
};

const ProtfolioWrap = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000;
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
  .mySwiper {
    width: 100%;
    height: 100%;
    color: #000;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
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

export default Portfolio;
