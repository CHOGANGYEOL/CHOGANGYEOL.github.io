import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/common/Header";
import NotFound from "./component/common/NotFound";
import Home from "./page/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
