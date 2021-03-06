/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import VueRecaptcha from "vue-recaptcha"
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css"

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
import Spinner from 'vue-simple-spinner'
import VueLoadingButton from 'vue-loading-button'


Vue.component( 'vue-recaptcha', VueRecaptcha)
Vue.component('vue-simple-spinner', Spinner)
Vue.component('vue-loading-button', VueLoadingButton)
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(VueRecaptcha, {
  siteKey: '6LeXbNEcAAAAADXZ4hJWouw34d7_KNQHrFddaGE7',
  loaderOptions: {
    useRecaptchaNet: true
  }
})

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  
  render: h => h(App)
}).$mount("#app");

