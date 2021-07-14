import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(require('vue-faker'), {locale: 'en_GB'});

new Vue({
  router,
  render: h => h(App),
  store,
}).$mount('#app')
