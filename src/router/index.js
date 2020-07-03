import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../view/Main.vue'], resolve),
      meta: {
        title: ''
      }
    },
    {
      path: '/test',
      component: resolve => require(['../view/test.vue'], resolve),
      meta: {
        title: ''
      }
    },
    {
      path: '/error/404',
      name: 'notFound',
      // component: notFound
      component: resolve => require(['../view/404.vue'], resolve)

    }, {
      path: '*', // 此处需特别注意置于最底部
      redirect: '/error/404'
    }
  ]
})
