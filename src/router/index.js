import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import ProjectView from '../views/ProjectView.vue'
import CareerView from '../views/CareerView.vue'
import NewsView from '../views/NewsView.vue'
import ContactView from '../views/ContactView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomeView},
    {path: '/about', component: AboutView},
    {path: '/product', component: ProductView},
    {path: '/project', component: ProjectView},
    {path: '/career', component: CareerView},
    {path: '/news', component: NewsView},
    {path: '/contact', component: ContactView},
    

  ],
})

export default router
