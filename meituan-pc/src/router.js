import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      children: [
          {
            path: 's/:name',
            name: 'goods',
            component: () => import(/* webpackChunkName: "goods" */ '@/page/goodsList.vue') 
          }, {
            path: '',
            name: 'index',
            component: () => import(/* webpackChunkName: "index" */ '@/page/index.vue')
          }, {
              path: '/changeCity',
              name: 'changeCity',
              component: () => import('@/page/changeCity')
          }, {
              path: 'meishi/:name',
              name: 'productDeatil',
              component: () => import('@/page/productDetail.vue')
          }
        ]
    },
    {
      path: '/blank',
      name: 'blank',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "blank" */ '@/layout/blank.vue'),
      children: [
          {
              path: '/register',
              name: 'register',
              component: () => import('@/page/register')
          }, {
              path: '/login',
              name: 'login',
              component: () => import('@/page/login')
          }
      ]
    }
  ]
})
