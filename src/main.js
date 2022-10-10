import { createPinia } from "pinia";
import { createApp } from "vue";

import App from "./App.vue";
import { auth } from "./includes/firebase";
import VeeValidatePlugin from "./includes/validation";
import router from "./router";

import "./assets/base.css";
import "./assets/main.css";
import Icon from "./directives/icon";

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);
    app.directive("icon", Icon);
    app.mount("#app");
  }
});
