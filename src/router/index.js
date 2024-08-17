import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView, name: 'home' },
    { path: '/other', component: () => import('@/views/OtherView.vue'), name: 'other' },
    { path: '/blogs/:id?', component: () => import('@/views/BlogView.vue'), name: 'blogs' },
    { path: '/:all(.*)*', props: true, component: NotFoundView, name: 'notFound' }
  ],
  scrollBehavior() {
    return {
      top: 0
    }
  }
})
export default router
