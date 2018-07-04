import Vue from 'vue'
import App from './App.vue'
import VR from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VR);

new Vue({
  render: h => h(App)
}).$mount('#app')
