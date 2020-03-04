import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import { directive as onClickaway } from "vue-clickaway";

import "./styles/main.css";

Vue.config.productionTip = process.env.NODE_ENV !== "production";
Vue.directive("onClickaway", onClickaway);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
