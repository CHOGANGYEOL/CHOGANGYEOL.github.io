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
      {
        path: "blog",
        children: [
          { path: "", element: <Pages.Blog.index /> },
          { path: ":id", element: <Pages.Blog.View /> },
          { path: "add", element: <Pages.Blog.Add /> },
        ],
      },
      { path: "profile", element: <Pages.Profile /> },
      { path: "project", element: <Pages.Project /> },
      { path: "terminal", element: <Pages.Terminal /> },
    ],
    errorElement: <Pages.NotFound />,
  },
]);
