import { createBrowserRouter } from "react-router-dom";
import { Pages } from "../../pages";

export const router = createBrowserRouter([
  { path: "/", children: [{ path: "", element: <Pages.Main /> }] },
]);
