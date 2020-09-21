import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import IT from '../views/IT.vue'
import Gallery from '../views/Gallery.vue'
import Article from '../views/Article.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/IT',
    name: 'IT',
    component: IT
  },
  {
    path: '/Gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/Article',
    name: 'Article',
    component: Article
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router