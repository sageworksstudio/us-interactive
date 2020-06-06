import Vue from 'vue'
import App from './App.vue'
require("typeface-open-sans")

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
