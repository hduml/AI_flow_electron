import { createRouter, createWebHashHistory } from 'vue-router'
import InitialPage from '../views/InitialPage.vue'
import LibManagerPage from '../views/LibManagerPage.vue'
import ModelingPage from '../views/ModelingPage.vue'
import MaterialsManagerPageVue from '../views/MaterialsManagerPage.vue'

const routes = [
  {
    path: '/',
    name: 'InitialPage',
    component: InitialPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
