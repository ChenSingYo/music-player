import useUserStore from "@/stores/user";
import { createRouter, createWebHistory } from "vue-router";



const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    name: "manage",
    path: "/manage-music",
    // optional route name
    alias: "/manage",
    component: () => import("../views/Manage.vue"),
    // beforeEnter(to, from, next) {
    //   console.log('manage route guard')
    //   next();
    // },
    meta: {
      requiresAuth: true,
    },
  },
  {
    name:'song',
    path: '/song/:id',
    component: () => import("../views/Song.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    redirect: {
      name: "home",
    },
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  // console.log(to.meta)
  if (!to.meta.requiresAuth) {
    next();
    return;
  }
  const store = useUserStore();

  if (store.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
