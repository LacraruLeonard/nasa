import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EarthImaginery from '../views/EarthImaginery.vue'
import SearchAssets from '../views/SearchAssets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/earth-imagery',
      name: 'earth-imagery',
      component: EarthImaginery
    },
    {
      path: '/search-assets',
      name: 'search-assets',
      component: SearchAssets
    }
  ]
})

export default router
