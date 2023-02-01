import {createRouter,createWebHashHistory} from 'vue-router'

 import AppPagInicial from '../components/PagInicial/AppPagInicial'
 import AppGeneros from '../components/generos/AppGeneros'
 import AppProduto from '../components/produtos/AppProdutos'


const routes = [
  { path: '/', component: AppPagInicial },
  { path: '/generos', component: AppGeneros },
  { path: '/produtos', component: AppProduto},
]


const router = createRouter({
  
  history: createWebHashHistory(),
  routes,
})

export default router


