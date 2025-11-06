import { createRouter, createWebHistory } from 'vue-router'
import Meteo from '@/views/meteo.vue'
import About from '@/views/about.vue'
import Mentions from '@/views/mentions.vue'

const routes = [
  { path: '/', name: 'meteo', component: Meteo },
  { path: '/about', name: 'about', component: About },
  { path: '/mentions', name: 'mentions', component: Mentions }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router