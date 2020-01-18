import Vue from 'vue'

export default {
    state: {
        services: [],
    },
    mutations: {
        setServices(state, data) {
            state.services = data
        },
        addService(state, data) {
            state.services.push(data);
        }

    },
    getters: {
        serviceList(state) {
            return state.services;
        }
    },
    actions: {
        addService({ commit }, service) {
            const serviceJson  = JSON.stringify(service)
            
            console.log(serviceJson)
            Vue.prototype.$http.post('api/services.json', serviceJson).then( res => {
                const data = res.data

                if( data ) {
                    commit('addService', service)
                }else {
                    alert('Não foi possível gravar serviço')
                }
            }).catch(err => {
                alert(err)
            })

        }
    }

}