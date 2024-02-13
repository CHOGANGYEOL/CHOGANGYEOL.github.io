import { Link } from 'react-router-dom';
import styled from 'styled-components';

const language = ['JavaScript', 'TypeScript', 'HTML5', 'CSS3'];

const library = [
  'React',
  'Axios',
  'React-query',
  'Redux',
  'Redux persist',
  'Stomp.js',
  'i18next',
  'Styled Component',
  'jQuery',
];

const protocol = ['HTTP', 'webSocket', 'REST API'];

const etc = ['Git', 'Photoshop', 'XD', 'Figma', 'Illustrator', 'Notion', 'Trello'];

const About = () => {
  return (
    <AboutWrap>
      <div className='title'>
        <div className='variable'>
          <span className='work'>FRONT</span>END
        </div>
        <p className='static'>Developer</p>
        <p>CHO GANGYEOL</p>
      </div>
      <div className='body'>
        <div>
          <h4>Language</h4>
          <ul className='itemList'>
            {language.map((el, idx) => {
              return <li key={idx}>{el}</li>;
            })}
          </ul>
        </div>
        <div>
          <h4>Library</h4>
          <ul className='itemList'>
            {library.map((el, idx) => {
              return <li key={idx}>{el}</li>;
            })}
          </ul>
        </div>
        <div>
          <h4>Protocol</h4>
          <ul className='itemList'>
            {protocol.map((el, idx) => {
              return <li key={idx}>{el}</li>;
            })}
          </ul>
        </div>
        <div>
          <h4>etc.</h4>
          <ul className='itemList'>
            {etc.map((el, idx) => {
              return <li key={idx}>{el}</li>;
            })}
          </ul>
        </div>
        <div>
          <h4>Link</h4>
          <ul className='hyphenList'>
            <li>
              <a href='https://github.com/CHOGANGYEOL' target='_blank' rel='noreferrer'>
                Github
              </a>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    </AboutWrap>
  );
};

const AboutWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  padding: 120px 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: scroll;
  .title {
    .variable {
      font-size: 12rem;
      line-height: 12rem;
      display: flex;
      flex-wrap: wrap;
      font-variation-settings: 'wght' 275, 'wdth' 50;
      text-align: center;
      animation: swapthings 3s infinite both cubic-bezier(0.17, 0.04, 0.04, 0.99);
      .work {
        animation: swapthings2 3s infinite both cubic-bezier(0.17, 0.04, 0.04, 0.99);
      }
    }
    .static {
      font-size: 30px;
      font-variation-settings: 'wght' 900, 'wdth' 200;
    }
  }

  .body {
    margin-top: 36px;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 16px;
    h4 {
      font-size: ${({ theme }) => theme.fontSize.big};
      /* color:#ccc; */
      margin-bottom: 6px;
    }
    ul.itemList {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      gap: 6px;
      li {
        padding: 2px 8px;
        color: #000;
        background-color: #ccc;
        border-radius: 100px;
        font-size: ${({ theme }) => theme.fontSize.small};
        font-weight: 500;
      }
    }
    ul.hyphenList {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4px;
      li {
        display: inline-block;
        transition: 0.15s all;

        ::before {
          content: '- ';
        }
        :hover {
          padding-left: 4px;
          opacity: 0.6;
        }
      }
    }
  }
  @media screen and (max-width: 640px) {
    .title {
      .variable {
        font-size: 8rem;
        line-height: 8rem;
      }
      .static {
        font-size: 24px;
      }
    }

    .body {
      margin-top: 24px;
      gap: 14px;
      h4 {
        font-size: ${({theme}) => theme.fontSize.main};
      }
    }
  }

  @keyframes swapthings {
    0% {
      font-variation-settings: 'wght' 275, 'wdth' 50;
    }

    50% {
      font-variation-settings: 'wght' 900, 'wdth' 200;
    }

    100% {
      font-variation-settings: 'wght' 275, 'wdth' 50;
    }
  }

  @keyframes swapthings2 {
    0% {
      font-variation-settings: 'wght' 900, 'wdth' 200;
    }

    50% {
      font-variation-settings: 'wght' 275, 'wdth' 50;
    }

    100% {
      font-variation-settings: 'wght' 900, 'wdth' 200;
    }
  }
`;
export default About;
