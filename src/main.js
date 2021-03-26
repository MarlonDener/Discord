import Vue from 'vue'

import Layout from './components/Layout'
import "./styles/main.css"

Vue.config.productionTip = false

new Vue({
  render: h => h(Layout),
}).$mount('#app')
