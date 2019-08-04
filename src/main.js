import Vue from "vue";
import App from "./App.vue";
import VueJsModal from "../projects/index";

Vue.config.productionTip = false;
Vue.use(VueJsModal);

new Vue({
  render: h => h(App)
}).$mount("#app");
