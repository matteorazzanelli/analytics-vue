import { createRouter, createWebHistory } from 'vue-router'

import AnalyticsView from '../views/AnalyticsView.vue'
import GeoView from '../views/GeoView.vue'

const routes = [
  {
    path: '/',
    name: 'analytics',
    component: AnalyticsView
  },
  {
    path: '/geo',
    name: 'geo',
    component: GeoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
