import Vue from "vue";
import App from "./App.vue";
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

import VueParticles from "vue-particles";
Vue.use(VueParticles);
