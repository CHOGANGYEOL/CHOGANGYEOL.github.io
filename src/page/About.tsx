import styled from "styled-components";

const About = () => {
  return (
    <AboutWrap>
      <div className="title">
        <div className="variable">
          <span className="work">FRONT</span>END
        </div>
        <p className="static">Developer</p>
        <p>CHO GANGYEOL</p>
      </div>
    </AboutWrap>
  );
};

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  padding: 0 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    .variable {
      font-size: 12rem;
      line-height: 12rem;
      display: flex;
      flex-wrap: wrap;
      font-variation-settings: "wght" 275, "wdth" 50;
      text-align: center;
      animation: swapthings 3s infinite both
        cubic-bezier(0.17, 0.04, 0.04, 0.99);
      .work {
        animation: swapthings2 3s infinite both
          cubic-bezier(0.17, 0.04, 0.04, 0.99);
      }
    }
    .static {
      font-size: 30px;
      font-variation-settings: "wght" 900, "wdth" 200;
    }
  }

  @keyframes swapthings {
    0% {
      font-variation-settings: "wght" 275, "wdth" 50;
    }

    50% {
      font-variation-settings: "wght" 900, "wdth" 200;
    }

    100% {
      font-variation-settings: "wght" 275, "wdth" 50;
    }
  }

  @keyframes swapthings2 {
    0% {
      font-variation-settings: "wght" 900, "wdth" 200;
    }

    50% {
      font-variation-settings: "wght" 275, "wdth" 50;
    }

    100% {
      font-variation-settings: "wght" 900, "wdth" 200;
    }
  }
`;
export default About;
