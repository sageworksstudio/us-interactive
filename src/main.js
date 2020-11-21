import Vue from 'vue'
import App from '@/App'
import store from '@/store/store'
import 'fontsource-open-sans'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
