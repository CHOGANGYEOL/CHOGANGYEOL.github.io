import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import four from "../image/404.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundWrap>
      {/* <img src={oops} alt="oops" className="oops" /> */}
      <img src={four} alt="four" className="four" />
      <p className="desc">
        We looked everywhere for this page.<br></br>
        Are you sure the website URL is correct?<br></br>
        Get in touch with the site owner.
      </p>
      <button onClick={() => navigate(-1)} className="btn">
        Go back
      </button>
    </NotFoundWrap>
  );
};

const NotFoundWrap = styled.article`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #000;
  .oops {
    max-width: 15rem;
    margin-bottom: 1rem;
  }
  .four {
    max-width: 25rem;
    margin-bottom: 4rem;
  }
  .desc {
    color: var(--gray-color);
    margin-bottom: 2rem;
  }
  .btn {
    border: 1px solid var(--white-color);
    color: var(--white-color);
    background-color: transparent;
    padding: 1rem 4rem;
    cursor: pointer;
    transition: 0.2s all;
    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export default NotFound;
