/*
 * @Author: Jack
 * @Date: 2020-05-28 15:46:58
 * @LastEditors: Jack
 * @LastEditTime: 2020-05-28 15:56:36
 * @Description:
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/rayman/:name",
    name: "Rayman",
    component: () =>
      import(/* webpackChunkName: "rayman" */ "../views/rayman/Index.vue")
  },
  {
    path: "/kmoonlight/:name",
    name: "Kmoonlight",
    component: () =>
      import(
        /* webpackChunkName: "kmoonlight" */ "../views/kmoonlight/Index.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
