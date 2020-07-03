import App from './App'
import router from './router'
import linkurl from './assets/js/common'
import {post, get, del} from './assets/js/axios'
import axios from 'axios'

// eslint-disable-next-line no-undef
Vue.prototype.$linkurl = linkurl
// eslint-disable-next-line no-undef
Vue.prototype.$axios = axios
// eslint-disable-next-line no-undef
Vue.config.productionTip = false

// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);

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
