import { createRouter, createWebHistory } from 'vue-router'
import getData from '../views/getData.vue'
import createData from '../views/createData.vue'
import updateData from '../views/updateData.vue'

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
  {
    path: '/update',
    name: 'updateData',
    component: updateData
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
