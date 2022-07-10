import Vue from 'vue'
import VueRouter from 'vue-router'
import ApiMarvelView from '../views/ApiMarvelView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ApiMarvelView

  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue')
  },
  {
    path: '/addCharacter',
    name: 'addCharacter',
    component: () => import('../views/CharacterAddView.vue')
  },
  {
    path: '/edit/:id',
    name: 'editCharacter',
    component: () => import('../views/CharacterAddView.vue')
  },
  {
    path: '/ejercicio1',
    name: 'ejercicio1',
    component: () => import('../views/Ejercicio1View.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
