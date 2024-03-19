import { createRouter, createWebHistory } from 'vue-router'
import getData from '../views/getData.vue'
import createData from '../views/createData.vue'

const routes = [
  {
    path: '/',
    name: 'getData',
    component: getData

  },
  {
    path: '/add',
    name: 'createData',
    component: createData

  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
