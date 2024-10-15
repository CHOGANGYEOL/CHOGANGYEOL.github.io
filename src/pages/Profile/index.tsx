import styled from "styled-components";
import { Paragraph } from "../../components/Common";
import { PROFILE_DATA } from "../../feature/Profile/const";
import { Link } from "react-router-dom";
import { isObjectDetail } from "../../feature/Profile/function";

const Profile = () => {
  return (
    <Section>
      <h2>{PROFILE_DATA.USER.name}</h2>
      <article>
        <Paragraph style={{ whiteSpace: "pre-line" }}>
          {PROFILE_DATA.USER.description}
        </Paragraph>
        <ul>
          {PROFILE_DATA.USER.idea.map((el, idx) => (
            <li key={"idea--" + String(idx)}>{el}</li>
          ))}
        </ul>

        {/* Education */}
        <article id="education">
          <h3>EDUCATION {PROFILE_DATA.EDUCATION.emoji}</h3>
          <ul>
            {PROFILE_DATA.EDUCATION.data.map((el, idx) => (
              <li key={"education--" + String(idx)}>
                <Paragraph>
                  {el.name}{" "}
                  <span>
                    ({el.startDate} ~ {el.endDate})
                  </span>
                </Paragraph>
                <ul>
                  {el.details.map((detail, idx) => (
                    <li key={"education--detail--" + String(idx)}>{detail}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>

        {/* Works */}
        <article id="works">
          <h3>WORK EXPERIENCE {PROFILE_DATA.WORKS.emoji}</h3>
          <ul>
            {PROFILE_DATA.WORKS.data.map((el, idx) => (
              <li key={"work--" + String(idx)}>
                <Paragraph>
                  <Link to={""}>{el.name}</Link>{" "}
                  <span>
                    ({el.startDate} ~ {el.endDate})
                  </span>
                </Paragraph>
                <Paragraph>{el.summary}</Paragraph>
                <Paragraph>{el.description}</Paragraph>
                <ul>
                  {el.details.map((detail, idx) => {
                    return (
                      <li key={"detail--" + String(idx)}>
                        {isObjectDetail(detail) ? (
                          <ul>
                            {detail.title}
                            <ul>
                              {detail.details.map((el, idx) => (
                                <li key={"detail--2depth--" + String(idx)}>
                                  {el}
                                </li>
                              ))}
                            </ul>
                          </ul>
                        ) : (
                          detail
                        )}
                      </li>
                    );
                  })}
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
