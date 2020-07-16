import Vue from 'vue'
import Router from 'vue-router'
import Sort from '../view/Sort'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../view/Index.vue'], resolve),
      meta: {
        title: '主页'
      },
      children: [
        {
          path: '/',
          component: resolve => require(['../view/Main.vue'], resolve),
          meta: {
            title: 'main'
          }
        },
        {
          path: '/about',
          component: resolve => require(['../view/aboutme.vue'], resolve),
          meta: {
            title: 'main'
          }
        },
        {
          path: '/timeline',
          component: resolve => require(['../view/Timeline.vue'], resolve),
          meta: {
            title: '时间线'
          }
        },
        {
          path: '/sort',
          component: Sort,
          meta: {
            title: '分类'
          }
        },
        {
          path: '/test',
          component: resolve => require(['../view/test.vue'], resolve),
          meta: {
            title: 'test'
          }
        },
        {
          path: '/404',
          name: 'notFound',
          title: '404',
          component: resolve => require(['../view/404.vue'], resolve)

        }, {
          path: '*', // 此处需特别注意置于最底部
          redirect: '/error/404'
        }
      ]
    }
  ]
})
