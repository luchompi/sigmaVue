import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogIn from '@/views/LogIn.vue'
import SingUp from "@/views/SingUp.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
      {
    path: '/login',
    name: 'LogIn',
    component: LogIn
  },
      {
    path: '/register',
    name: 'SingUp',
    component: SingUp
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
