import { createHashRouter } from "react-router-dom";
import { Pages } from "../../pages";
import { Root } from "../../layout";

// github pages로 배포할 예정이기 때문에 hash router를 사용
export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Pages.Main /> },
      { path: "blog", element: <Pages.Blog /> },
      { path: "profile", element: <Pages.Profile /> },
      { path: "project", element: <Pages.Project /> },
      { path: "terminal", element: <Pages.Terminal /> },
      {
        path: "games",
        children: [
          { path: "", element: <Pages.Games /> },
          { path: "omok", element: <Pages.OMok /> },
          { path: "canvas", element: <Pages.Canvas /> },
        ],
      },
    ],
    errorElement: <Pages.NotFound />,
  },
]);
