import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import auth from './middlewares/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        middleware: auth
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/travel',
      name: 'travel',
      component: () => import('./views/Travel.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/travel/new',
      name: 'new-travel',
      component: () => import('./views/travel-plan/NewTravel.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/travel/new/detail',
      name: 'data-travel',
      component: () => import('./views/travel-plan/DataTravel.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/travel/new/choose',
      name: 'choose-travel',
      component: () => import('./views/travel-plan/ChooseTravel.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/place/:id',
      component: () => import('./views/PlaceDetail.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/plan/:id',
      component: () => import('./views/TravelDetail.vue'),
      meta: {
        middleware: auth
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    }
  ]
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index]
  if (!subsequentMiddleware) return context.next

  return (...parameters) => {
    context.next(...parameters)
    const nextMiddleware = nextFactory(context, middleware, index + 1)
    subsequentMiddleware({
      ...context,
      next: nextMiddleware
    })
  }
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware]
    const context = {
      from,
      next,
      router,
      to
    }
    const nextMiddleware = nextFactory(context, middleware, 1)
    return middleware[0]({ ...context, next: nextMiddleware })
  }
  return next()
})

export default router;