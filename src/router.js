import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ProjectPage from "./pages/ProjectPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";




const router = createRouter({
history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
    },
    {
        path: "/projects",
        name: "Projects",
        component: ProjectPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "Not-Found",
        component: NotFoundPage,
    },
  ],
});

export { router };