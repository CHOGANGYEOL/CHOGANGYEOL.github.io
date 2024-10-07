import styled from "styled-components";
import { Paragraph } from "../../components/Common";
import { PROFILE_DATA } from "../../feature/Profile/const";

const Profile = () => {
  return (
    <Section>
      <h2>{PROFILE_DATA.name}</h2>
      <article>
        <Paragraph style={{ whiteSpace: "pre-line" }}>
          {PROFILE_DATA.description}
        </Paragraph>
        <ul>
          {PROFILE_DATA.idea.map((el, idx) => (
            <li key={"idea--" + String(idx)}>{el}</li>
          ))}
        </ul>
        <article>
          <h3>EDUCATION {PROFILE_DATA.education.emoji}</h3>
          <ul>
            {PROFILE_DATA.education.data.map((el) => (
              <li>
                <Paragraph>
                  {el.name}{" "}
                  <span>
                    ({el.startDate} ~ {el.endDate})
                  </span>
                </Paragraph>
                <ul>
                  {el.details.map((detail) => (
                    <li>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>
      </article>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  max-width: 95rem;
  margin: 0 auto;
  padding: 12rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
  h2 {
    ${({ theme }) => theme.font.title[48]}
  }
  > article {
    display: flex;
    flex-direction: column;
    gap: 3.6rem;
  }
`;

export default Profile;
