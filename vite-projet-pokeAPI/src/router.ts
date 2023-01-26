import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'
import About from './views/About.vue'
import PokeList from './views/PokemonList.vue'
import PokeDetail from './views/PokemonDetails.vue'
import Contact from './views/Contact.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/Poke',
    name: 'Pokemon',
    component: PokeList
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetails',
    component: PokeDetail
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
});