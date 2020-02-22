import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './components/Home'
import WorkCreate from './components/Form/WorkCreate'
import Works from './components/Work/Works'
import Category from './components/Work/Category'
import ViewWorks from "./components/Work/ViewWorks";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/inicio', component: Home},
        { path: '/servicos/listar', component: Works},
        { path: '/servicos/cadastrar', component: WorkCreate},
        { path: '/servicos/visualizar', component: ViewWorks},

        { path: '/servicos/categorias', component: Category }
    ]
})
