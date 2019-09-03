import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/url",
      name: "url",
      component: () => import("./views/Url.vue")
    },
    {
      path: "/open",
      name: "open",
      component: () => import("./views/Open.vue")
    },
    {
      path: "/remove",
      name: "remove",
      component: () => import("./views/Remove.vue")
    },
    {
      path: "/test",
      name: "test",
      component: () => import("./views/Test.vue")
    }
  ]
});
