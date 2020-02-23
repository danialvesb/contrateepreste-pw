import Vue from 'vue'
import { LayoutPlugin } from 'bootstrap-vue'
import './plugins/axios'
import App from './App.vue'


import router from './router';
import store from './store/store';

Vue.config.productionTip = false
Vue.use(LayoutPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
