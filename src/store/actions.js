import Vue from 'vue'

export default {
    loadData({ commit }) {
        Vue.prototype.$http.get('api/services').then( resp => {
            const data =  resp.data;

            if(data) {
                commit('setServices', data)
                
            }
        } ).catch(err => {
            alert(err);
            
        });
    }
}
