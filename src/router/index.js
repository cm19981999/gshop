import Vue from "vue";
import VueRouter from "vue-router";
// import Msite from "../pages/Msite/Msite.vue";
// import Search from "../pages/Search/Search.vue";
// import Order from "../pages/Order/Order.vue";
// import Profile from "../pages/Profile/Profile.vue";
import Msite from "../pages/Msite/Msite.vue";
import Search from "../pages/Search/Search.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Login from "../pages/Login/Login.vue";
import Shop from "../pages/Shop/Shop.vue";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods.vue";
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings.vue";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: "/msite",
      component: Msite,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/search",
      component: Search,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/order",
      component: Order,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        showFooter: true,
      },
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/",
      redirect: "/msite",
    },
    {
      path: "/shop",
      component: Shop,
      children: [
        {
          path: "/shop/goods",
          component: ShopGoods,
        },
        {
          path: "/shop/ratings",
          component: ShopRatings,
        },
        {
          path: "/shop/info",
          component: ShopInfo,
        },
        {
          path: "",
          redirect: "/shop/goods",
        },
      ],
    },
  ],
});
