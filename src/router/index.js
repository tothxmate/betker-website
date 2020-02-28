import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Header from '../components/Header'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/header',
    component: Header
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/gallery',
    component: Gallery
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
