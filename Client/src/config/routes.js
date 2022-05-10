import MainLayout from "../Layouts/MainLayout";
import About from "../views/About";
import Home from "../views/Home";
import Login from "../views/Login";
import MyBlog from "../views/MyBlog";
import Projects from "../views/Projects";
import Error404 from "../views/Error404";

const routes = [
  {
    path: "/login",
    component: Login,
    exact: true,
    routes: [],
  },

  {
    path: "/",
    component: MainLayout,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true,
      },
      {
        path: "/About",
        component: About,
        exact: true,
      },
      {
        path: "/myblog",
        component: MyBlog,
        exact: true,
      },
      {
        path: "/projects",
        component: Projects,
        exact: true,
      },
      {
        component: Error404,
      },
    ],
  },
];

export default routes;
