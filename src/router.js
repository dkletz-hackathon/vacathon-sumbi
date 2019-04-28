import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/travel',
      name: 'travel',
      component: () => import('./views/Travel.vue')
    },
    {
      path: '/travel/new',
      name: 'new-travel',
      component: () => import('./views/travel-plan/NewTravel.vue')
    },
    {
      path: '/travel/new/show',
      name: 'show-travel',
      component: () => import('./views/travel-plan/ShowPlan.vue')
    }
  ]
})
