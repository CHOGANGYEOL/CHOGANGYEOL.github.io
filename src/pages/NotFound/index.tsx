import styled from "styled-components";
import { VStack } from "../../components/Common";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Wrapper $alignItems="center" $justifyContent="center" $gap="3.6rem">
      <p className="bigger">Oops!</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <VStack $gap="1.2rem">
        <em>Not Found</em>
        <Button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </Button>
      </VStack>
    </Wrapper>
  );
};

const Wrapper = styled(VStack)`
  min-height: 100vh;
  .bigger {
    ${({ theme }) => theme.font.title[48]};
    font-weight: 600;
  }
  em {
    color: ${({ theme }) => theme.colors.gray[600]};
  }
`;

export default NotFound;
