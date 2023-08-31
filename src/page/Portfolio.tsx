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

interface ItemProps {
  image: string;
}

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
              <Item image={el.image}>
                <Link to={el.link} className="contents">
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </Link>
              </Item>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ProtfolioWrap>
  );
};

const Item = styled.div<ItemProps>`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  height: 100%;
  transition: 0.15s transform;
  display: flex;
  :hover {
    transform: scale(1.1);
    a {
      position: relative;
      padding: 24px 24px 96px;
    }
  }
  :not(:hover) {
    ::before {
      opacity: 0.3;
    }
  }
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0;
    transition: 0.15s opacity;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: flex-end;
    padding: 24px;
    transition: 0.15s padding;
    h3 {
      font-size: var(--title-font);
      margin-bottom: 12px;
    }
  }
  @media screen and (max-width: 765px) {
    ::before {
      display: none;
    }
  }
`;

const ProtfolioWrap = styled.article`
  height: 100vh;
  background-color: #000;
  .mySwiper {
    width: 100%;
    height: 100%;
    color: #000;
    .swiper-slide {
      overflow: hidden;
    }
  }
`;

export default Portfolio;
