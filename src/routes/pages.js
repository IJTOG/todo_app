import Todo from "../pages/todo";
import Login from "../pages/login";
import TodoDetail from "../pages/todoDetail";

var pageRoutes = [
  { path: "/todo", name: "Index", component: Todo },
  { path: "/detail", name: "Detail", component: TodoDetail },
  { path: "/login", name: "Index", component: Login },
  { redirect: true, path: "/", pathTo: "/todo", name: "Index" }
];

export default pageRoutes;
