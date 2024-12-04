import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Category from '@/components/Category.vue'
import Product from '@/components/Product.vue'

const routes=[
  {path:'/', component:HomeView},
  {path:'/categories/:categoryId',component:Category},
  {path:'/products/:productId',component:Product},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
