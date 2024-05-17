import styled, { keyframes } from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <div className="spinner" />
    </Container>
  );
};

const rotate = keyframes`
  to {
    transform: rotate(360deg); 
  }
`;

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  .spinner {
    width: 5rem;
    height: 5rem;
    border: 3px solid ${({ theme }) => theme.colors.primary[600]};
    border-radius: 50%;
    border-top-color: ${({ theme }) => theme.colors.white};

    animation: ${rotate} 1s ease-in-out infinite;
  }
`;
