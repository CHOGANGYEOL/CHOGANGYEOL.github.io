import { Link } from "react-router-dom";
import { useGetBlogItems } from "../../services/blog/queries";
import { Loading } from "../../components/Common/Loading";
import { Grid, HStack, Paragraph, VStack } from "../../components/Common";
import styled from "styled-components";
import Theme from "../../lib/styledComponents/Theme";
import { formatDate } from "../../utils/format";

const Blog = () => {
  const { data, isSuccess, isLoading } = useGetBlogItems();

  if (isLoading) return <Loading />;
  HStack;
  if (isSuccess) {
    return (
      <Wrapper $columns={4} $gap="1.2rem">
        {data.map((el) => (
          <Link to={`${el.id}`}>
            <Item $gap="1.2rem">
              <Paragraph $font="title_2" $fontWeight={700}>
                {el.title}
              </Paragraph>
              <Paragraph className="date">
                {formatDate(new Date(el.updatedAt))}
              </Paragraph>
            </Item>
          </Link>
        ))}
      </Wrapper>
    );
  }
};

const Wrapper = styled(Grid)`
  padding: 2.4rem;
`;

const Item = styled(VStack)`
  cursor: pointer;
  padding: 1.2rem;
  border: 1px solid ${Theme.colors.gray[400]};
  border-radius: 0.4rem;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.5rem);
  }
  .date {
    padding-top: 1.2rem;
    border-top: 1px solid ${Theme.colors.gray[400]};
  }
`;

export default Blog;
