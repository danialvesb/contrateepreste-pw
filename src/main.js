import Vue from 'vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons  } from 'bootstrap-vue'
import './plugins/axios'
import App from './App.vue'


import router from './router';
import store from './store/store';

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
