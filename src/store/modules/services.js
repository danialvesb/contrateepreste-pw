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
        },
        removeService(state, id) {
            const record = state.services.findIndex(element => element.id == id)
            state.services.splice(record, 1)
        },
        updateService(state, service) {
            
            const record = state.services.findIndex(element => element.id == service.id)
            console.log(JSON.stringify(state.services[record]))
            // state.services.splice(record, 0, service)
            console.log(JSON.stringify(state.services[record]))
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
            
            
            Vue.prototype.$http.post('api/services', serviceJson).then( res => {
                const data = res.data

                if( data ) {
                    commit('addService', service)
                }else {
                    alert('Não foi possível gravar serviço')
                }
            }).catch(err => {
                alert(err)
            })

        },
        removeService({ commit }, id) {
            commit('removeService', id)
        },
        updateService({ commit }, service) {
            commit('updateService', service)
        }
    }

}