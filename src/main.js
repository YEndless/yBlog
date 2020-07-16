import App from './App'
import router from './router'
import Vue from 'vue'
import linkurl from './assets/js/common'
import {post, get, del} from './assets/js/axios'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(ElementUI)
Vue.use(BootstrapVue)
Vue.use(less)
Vue.prototype.$linkurl = linkurl
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.prototype.$del = del

Vue.prototype.$bus = new Vue()

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
