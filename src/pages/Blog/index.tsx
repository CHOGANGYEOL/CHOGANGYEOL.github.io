import { Link, useNavigate } from "react-router-dom";
import { useGetBlogItems } from "../../services/blog/queries";
import { Loading } from "../../components/Common/Loading";
import { Grid, Paragraph, VStack } from "../../components/Common";
import styled from "styled-components";
import Theme from "../../lib/styledComponents/Theme";
import { formatDate } from "../../utils/format";
import useWindowKeyDown from "../../hooks/useKeydown";
import { toast } from "react-toastify";

const Blog = () => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetBlogItems();

  useWindowKeyDown(["a", "Meta"], () => {
    try {
      const input = prompt("Please enter your password");
      if (input !== null) {
        if (input === import.meta.env.VITE_BLOG_ADD_PASSWORD) {
          navigate("add", { state: "success" });
        } else {
          throw new Error("Password does not match");
        }
      }
    } catch (err) {
      if (err instanceof Error) toast.error(err.message);
    }
  });

  if (isLoading) return <Loading />;

  if (isSuccess) {
    return (
      <Wrapper $columns={4} $gap="1.2rem">
        {data.map((el) => (
          <Link to={`${el.id}`} key={"item--" + String(el.id)}>
            <Item $gap="1.2rem">
              <VStack $gap="0.6rem">
                <VStack>
                  <Paragraph $font="main" $color="gray">
                    {el.category ?? "default"}
                  </Paragraph>
                  <Paragraph $font="title_24" $fontWeight={700} $ellipsis={1}>
                    {el.title}
                  </Paragraph>
                </VStack>
                <Paragraph $ellipsis={4}>{el.data}</Paragraph>
              </VStack>
              <Paragraph className="date" $color="gray" $textAlign="right">
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
  background-color: ${Theme.colors.white};
  border-radius: 0.4rem;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-0.5rem);
  }
  .date {
    padding-top: 1.2rem;
    border-top: 1px solid ${Theme.colors.gray};
  }
`;

export default Blog;
