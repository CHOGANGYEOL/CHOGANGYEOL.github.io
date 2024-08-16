import Blog from "./Blog";
import BlogAdd from "./Blog/Add";
import BlogView from "./Blog/View";
import Main from "./Main";
import NotFound from "./NotFound";
import Profile from "./Profile";
import Project from "./Project";
import Terminal from "./Terminal";

export const Pages = {
  Main,
  NotFound,
  Blog: {
    index: Blog,
    View: BlogView,
    Add: BlogAdd,
  },
  Profile,
  Project,
  Terminal,
};
