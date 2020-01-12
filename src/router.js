import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from './components'
import Home from './components/Home'
import ServiceCreate from './components/forms/ServiceCreate'
import ServiceList from './components/lists/ServiceList'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/inicio', component: Home},
        { path: '/novoservico', component: ServiceCreate},
        { path: '/listaservico', component: ServiceList}
    ]
})
