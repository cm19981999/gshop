// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import { Button } from "mint-ui";
import VueLazyload from "vue-lazyload";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mock/mockServer"; // 加载mockServer即可
import loading from "./common/imgs/loading.gif";
import "./fiters"; // 加载过滤器

Vue.config.productionTip = false;
Vue.component(Button.name, Button);
Vue.use(VueLazyload, {
  // 内部自定义一个指令lazy
  loading,
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
