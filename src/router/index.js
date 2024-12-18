import { createRouter, createWebHistory } from 'vue-router'
import Page from '@/views/Page.vue'
import Section from '@/views/Section.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/',
      redirect: '/page/1',
    },
    {
      path: '/page/:nb',
      component: Page,
      name: 'page',
      children:[
        {
          path: 'section/:id',
          component: Section,
          name: 'section',
        }
      ]
    },

  ]
})

export default router;
