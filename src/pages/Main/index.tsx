import { toast } from "react-toastify";

const Main = () => {
  return (
    <>
      <button
        onClick={() => {
          toast.info("test");
        }}
      >
        test
      </button>{" "}
      test
    </>
  );
};

export default Main;
