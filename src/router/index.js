import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../view/Index.vue'], resolve),
      meta: {
        title: 'ywyqqq'
      }
    },
    {
      path: '/test2',
      component: resolve => require(['../view/test2.vue'], resolve),
      meta: {
        title: 'test'
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
      path: '/h',
      component: resolve => require(['../components/HelloWorld'], resolve),
      meta: {
        title: 'h'
      }
    },
    {
      path: '/Index',
      component: resolve => require(['../view/Index.vue'], resolve),
      meta: {
        title: '主页'
      },
      children: [
        {
          path: '/timeline',
          component: resolve => require(['../view/Timeline.vue'], resolve),
          meta: {
            title: '时间线'
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
          path: '/error/404',
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
