import { createRouter, createWebHistory } from 'vue-router'
import Meteo from '@/views/meteo.vue'
import About from '@/views/about.vue'
import Mentions from '@/views/Mentions.vue'
import Resultat from '@/components/Resultat.vue'

const routes = [
  { path: '/', name: 'meteo', component: Meteo },
  { path: '/about', name: 'about', component: About },
  { path: '/mentions', component: Mentions },
  { path: '/resultat', component: Resultat },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router