import App from './App'
import router from './router'
import linkurl from './assets/js/common'
import {post, get, del} from './assets/js/axios'
import axios from 'axios'

import less from 'less'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// eslint-disable-next-line no-undef
Vue.use(BootstrapVue)
// eslint-disable-next-line no-undef
Vue.use(less)
// eslint-disable-next-line no-undef
Vue.prototype.$linkurl = linkurl
// eslint-disable-next-line no-undef
Vue.prototype.$axios = axios
// eslint-disable-next-line no-undef
Vue.config.productionTip = false

// eslint-disable-next-line no-undef
Vue.prototype.$post = post
// eslint-disable-next-line no-undef
Vue.prototype.$get = get
// eslint-disable-next-line no-undef
Vue.prototype.$del = del

// eslint-disable-next-line no-undef
Vue.prototype.$bus = new Vue()

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

// eslint-disable-next-line no-undef,no-new
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
