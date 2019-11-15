import Vue from "vue";
import App from "./App.vue";
import VueParticles from "vue-particles";
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faGithub} from "@fortawesome/free-brands-svg-icons"

library.add(faUserSecret)
library.add(faFontAwesome)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;
Vue.use(VueParticles);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
