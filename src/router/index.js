import { createRouter, createWebHistory } from 'vue-router'
import HomeView1 from '../views/HomeView1.vue'
// import HeaderLayout from '../views/layout/HeaderLayout.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView1
  },
  // {
  //   path: '/',
  //   name: 'header',
  //   component: HeaderLayout
  // },
  {
    path: '/line1',
    name: 'line1',
    component: () => import('../views/Line1One.vue')
  },
  {
    path: '/line2',
    name: 'line2',
    component: () => import('../views/Line2Two.vue')
  },
  {
    path: '/line3',
    name: 'line3',
    component: () => import('../views/Line3Three.vue')
  },
  {
    path: '/line4',
    name: 'line4',
    component: () => import('../views/Line4Four.vue')
  },
  {
    path: '/line5',
    name: 'line5',
    component: () => import('../views/Line5Five.vue')
  },
  {
    path: '/line6',
    name: 'line6',
    component: () => import('../views/Line6Six.vue')
  },
  {
    path: '/line7',
    name: 'line7',
    component: () => import('../views/Line7Seven.vue')
  },
  {
    path: '/line8',
    name: 'line8',
    component: () => import('../views/Line8Eight.vue')
  },
  {
    path: '/line9',
    name: 'line9',
    component: () => import('../views/Line9Nine.vue')
  },
  // {
  //   path: '/line10',
  //   name: 'line10',
  //   component: () => import('../views/Line10Ten.vue')
  // },
  {
    path: '/Query',
    name: 'Query',
    component: () => import('../views/Line10Ten.vue'),
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
