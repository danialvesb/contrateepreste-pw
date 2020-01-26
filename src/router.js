import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './components/Home'
import ServiceCreate from './components/forms/ServiceCreate'
import ServiceList from './components/services/ServiceList'
import ServiceCategories from './components/services/ServiceCategories'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/inicio', component: Home},
        { path: '/servicos/listar', component: ServiceList},
        { path: '/servicos/cadastrar', component: ServiceCreate},
        { path: '/servicos/categorias', component: ServiceCategories }
    ]
})
