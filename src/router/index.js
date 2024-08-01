import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import OtherView from '@/views/OtherView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/other', component: OtherView, name: 'other' },
    { path: '/blogs/:id?', component: BlogView, name: 'blogs' },
    { path: '/:all(.*)*', props: true, component: NotFoundView, name: 'notFound' }
  ]
})
export default router
