import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/games");
        }}
      >
        이동
      </button>{" "}
      <button
        onClick={() => {
          toast.info("test");
        }}
      >
        토스트
      </button>
    </>
  );
};

export default Main;
