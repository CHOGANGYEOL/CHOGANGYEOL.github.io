import styled from 'styled-components';
import * as Swiper from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

import { PortfolioData } from '../data/PortfolioData';

interface IItem {
  image: string;
}

const Portfolio = () => {
  return (
    <ProtfolioWrap>
      <Swiper.Swiper
        navigation
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
        className='mySwiper'
      >
        {PortfolioData.map((el) => {
          return (
            <Swiper.SwiperSlide key={`swiper_${el.title}`}>
              <Item image={el.image}>
                <div className='contents'>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>
              </Item>
            </Swiper.SwiperSlide>
          );
        })}
      </Swiper.Swiper>
    </ProtfolioWrap>
  );
};

const Item = styled.div<IItem>`
  position: relative;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center center;
  height: 100%;
  transition: 0.15s transform;
  display: flex;
  :hover {
    transform: scale(1.1);
    .contents {
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
    content: '';
    position: absolute;
    inset: 0;
    background-color: #000;
    opacity: 0;
    transition: 0.15s opacity;
  }
  .contents {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: flex-end;
    padding: 24px;
    transition: 0.15s padding;
    color: var(--white-color);
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
