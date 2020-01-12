import Vue from 'vue'

export default {
    loadData({ commit }) {
        Vue.prototype.$http.get('api/services.json').then( resp => {
            const data =  resp.data
            
            if(data) {
                commit('setServices', data)
                
            }
        } )
    }
}