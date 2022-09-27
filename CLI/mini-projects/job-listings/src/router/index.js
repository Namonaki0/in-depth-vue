import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";
// import Jobs from "../views/jobs/Jobs.vue";
import NotFound from "../views/NotFound.vue";
import JobDescription from "../views/jobs/JobDescription.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // lazy loading components
    component: () => import("../views/About"),
  },
  {
    path: "/jobs",
    name: "Jobs",
    // lazy loading components
    component: () => import("../views/jobs/Jobs"),
  },
  {
    path: "/jobs/:id",
    name: "JobDescription",
    component: JobDescription,
    props: true,
  },
  // redirects
  {
    path: "/old-jobs",
    redirect: "/jobs",
  },
  // catchall 404
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
