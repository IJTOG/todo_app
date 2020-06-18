import Todo from "../pages/todo";
import Login from "../pages/login";

var pageRoutes = [
  { path: "/todo", name: "Index", component: Todo },
  { path: "/login", name: "Index", component: Login },
  { redirect: true, path: "/", pathTo: "/todo", name: "Index" }
];

export default pageRoutes;
