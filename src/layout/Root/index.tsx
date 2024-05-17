import { Outlet, useNavigation } from "react-router-dom";
import { Loading } from "../../components/Common/Loading";
import { Fragment } from "react/jsx-runtime";

const Root = () => {
  const { state } = useNavigation();
  return (
    <Fragment>
      {state === "loading" && <Loading />}
      <Outlet />
    </Fragment>
  );
};

export default Root;
