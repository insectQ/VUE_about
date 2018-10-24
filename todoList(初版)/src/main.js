import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'Vuex'

//Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})