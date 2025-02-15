import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/app/learn',
      name: 'learn',
      component: () => import('../views/LearnView.vue')
    },
    {
      path: '/app/learn/quiz',
      name: 'learn_quiz',
      component: () => import('../views/QuizView.vue')
    },
    {
      path: '/app/learn/story',
      name: 'learn_story',
      component: () => import('../views/StoryView.vue')
    },
    {
      path: '/app/learn/mastered-words',
      name: 'learn_mastered_words',
      component: () => import('../views/MasteredWordsView.vue')
    },
    {
      path: '/app/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue')
    }
  ]
})

export default router
