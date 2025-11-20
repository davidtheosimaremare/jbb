import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProductView from '../views/ProductView.vue'
import ProjectView from '../views/ProjectView.vue'
import CareerView from '../views/CareerView.vue'
import NewsView from '../views/NewsView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'


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
    {
      path: '/project/:id', 
      name: 'project-detail',
      component: ProjectDetailView,
      props: true // Opsional: Mengirim ID sebagai props ke komponen
    },
    {
      path: '/news/:slug', 
      name: 'news-detail',
      component: NewsDetailView,
      props: true
    }
    
    

  ],
})



NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});


router.afterEach(() => {
  NProgress.done(); 
});

export default router
