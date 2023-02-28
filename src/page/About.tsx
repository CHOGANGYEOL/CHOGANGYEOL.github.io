import styled from "styled-components";
import profileImg from "../image/profileImg.jpg";

const AboutWrap = styled.article`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 8rem);
  justify-content: center;
  align-items: center;
  .flexWrap {
    display: flex;
    width: 100%;
    .imgWrap {
      flex-basis: 40%;
      border-radius: 10px;
      overflow: hidden;
      > img {
        max-width: 100%;
      }
    }
    .desc {
      flex-basis: 60%;
      padding-left: 10rem;
    }
  }
  .desc {
    h2 {
        font-size:var(--big-font);
        margin-bottom:1.5rem;
    }
    .sub-title {
        font-size:var(--sub-head-font);
        font-weight: 600;
        color: var(--gray-color);
        margin-bottom: 5rem;
        span {
            color:var(--point-color);
        }
    }
  }
`;

const About = () => {
  return (
    <AboutWrap>
      <div className="flexWrap">
        <div className="imgWrap">
          <img src={profileImg} alt="profileImg" />
        </div>
        <div className="desc">
          <h2>KANGYEOL CHO</h2>
          <p className="sub-title">
            <span>Frontend</span> Developer
          </p>
          <p className="">
            Hello, I'm KANGYEOL CHO and happy developer. I am currently working
            on Front-End (React) development. This is a space that introduces me
            and records my growth log. This is like my growing up diary. Please
            feel free to contact me if you have any questions. Thank you!
          </p>
        </div>
      </div>
    </AboutWrap>
  );
};
export default About;
