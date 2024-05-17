import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HStack } from "../../components/Common";
import { Button } from "../../components/Button";

const Main = () => {
  const navigate = useNavigate();
  return (
    <HStack $gap="2rem">
      <Button
        onClick={() => {
          navigate("/games");
        }}
      >
        이동
      </Button>
      <Button
        onClick={() => {
          toast.info("test");
        }}
      >
        토스트
      </Button>
    </HStack>
  );
};

export default Main;
