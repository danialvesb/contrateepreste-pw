import Vue from 'vue'

export default {
    loadData({ commit }) {
        Vue.prototype.$http.get('api/services.json').then( resp => {
            const data =  resp;
            
            if(data) {
                commit('setServices', data)
                
            }
        } ).catch(err => {
            alert(err);
            
        });
    }
}
