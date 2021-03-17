import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import topPlayers from '../views/topPlayers.vue'
import Standings from '../views/Standings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/topPlayers',
    name: 'topPlayers',
    component: topPlayers
  },
  {
    path: '/standings',
    name: 'Standings',
    component: Standings
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
