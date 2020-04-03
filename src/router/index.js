import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/images',
        name: 'images',
        component: () => import(/* webpackChunkName: "images" */ '../components/image_list.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "auth" */ '../views/login.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "auth" */ '../views/register.vue'),
    meta: {
      requiresAuth: false,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    !store.getters.authStatus
  ) {
    store.dispatch('logout')
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    })
  }
  if (
    !to.matched.some(record => record.meta.requiresAuth) &&
    store.getters.authStatus
  ) {
    next({ name: 'images' })
  }

  next()
})

export default router
