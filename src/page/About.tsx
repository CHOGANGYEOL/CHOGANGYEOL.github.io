import styled from "styled-components";
import Background from "../image/Background.webp";

const About = () => {
  return (
    <AboutWrap>
      <p>STUDIO CYLO</p>
      <h3>Stay hungry</h3>
      <h3>Stay foolish</h3>
    </AboutWrap>
  );
};

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  background-image: url(${Background});
  padding: 10rem 24px 0;
  filter: brightness(0.5);
`;
export default About;
