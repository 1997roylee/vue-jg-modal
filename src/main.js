import Vue from 'vue'
import App from './App.vue'
import VueJsButton from '../projects/ButtonComponent/index.js'

Vue.config.productionTip = false
Vue.use(VueJsButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
