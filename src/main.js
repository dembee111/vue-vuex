import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-test-da662.firebaseio.com/';

Vue.filter('currency', (value) => {
    return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
