import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Card, Col, Row, Input, Loading, Button } from "element-ui";
Vue.use(Card);
Vue.use(Col);
Vue.use(Row);
Vue.use(Input);
Vue.use(Loading);
Vue.use(Button);

import Qrcode from "@chenfengyuan/vue-qrcode";
Vue.component(Qrcode.name, Qrcode);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
