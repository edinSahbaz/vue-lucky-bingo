import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from "../views/Main.vue";
import Ticket from "../views/Ticket.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/ticket",
    name: "ticket",
    component: Ticket
  },
  {
    path: "/main",
    name: "main",
    component: Main
  }
];

const router = new VueRouter({
  routes
});

export default router;
