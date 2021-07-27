import Vue from "vue"; // Импортируется Vue
import VueRouter from "vue-router"; // Импортируется Router
import Home from "../views/Home.vue"; // Компонент-страница Home
import AddTodo from "@/views/AddTodo";
import TodoDetails from "@/views/TodoDetails";

Vue.use(VueRouter); // Устанавливаем плагин VueRouter

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
    meta: {},
  },
  {
    path: "/add",
    name: "AddPage",
    component: AddTodo,
  },
  {
    path: "/todo/:id",
    name: "TodoDetailsPage",
    component: TodoDetails,
  },
  {
    path: "*",
    name: "404",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
