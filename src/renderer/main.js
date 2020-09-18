import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';
// import VueAwesomeSwiper from './agree-sdk/vue-awesome-swiper';
// import VueAwesomeSwiper from 'vue-awesome-swiper';
// import 'swiper/css/swiper.css'
import './assets/swiper.css';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

// Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router: router,
  // render含义: https://segmentfault.com/q/1010000007130348
  render: h => h(App)
});
