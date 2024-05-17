import { createBrowserRouter } from "react-router-dom";
import { Pages } from "../../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "", element: <Pages.Main /> },
      {
        path: "games",
        children: [
          { path: "", element: <Pages.Games /> },
          { path: "omok", element: <Pages.OMok /> },
        ],
      },
    ],
  },
]);
