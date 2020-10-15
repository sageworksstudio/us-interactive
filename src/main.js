import Vue from 'vue'
import App from './App.vue'
require("fontsource-open-sans")

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
