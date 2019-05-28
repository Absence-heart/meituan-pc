import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/_util.css'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.directive('document-click', {
    bind(el, binding, vnode) {
        document.addEventListener('click', binding.value, false)
    },
})
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
