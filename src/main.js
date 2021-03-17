import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import mock2 from './mock-data2.js'

Vue.config.productionTip = false

let data = {
  players: mock,
  teams: mock2
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
