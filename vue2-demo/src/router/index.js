import Vue from "vue";
import VueRouter from "vue-router";

// import Ab from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomePage.vue")
  },
  {
    path: "/My",
    name: "My",
    component: () => import(/* webpackChunkName: "My" */ "../views/MyPage.vue")
  },
  {
    path: "/Course",
    name: "Course",
    component: () => import(/* webpackChunkName: "Course" */ "../views/CoursePage.vue")
  },
  {
    path: "/Message",
    name: "Message",
    component: () => import(/* webpackChunkName: "Message" */ "../views/MessagePage.vue")
  },
  {
    path: "/message-add",
    name: "MessageAdd",
    component: () => import(/* webpackChunkName: "MessageAddPage" */ "../views/MessageAddPage.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
