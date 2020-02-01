import Vue from 'vue'


export default {
    state: {
        works: [],
    },
    mutations: {
        setWorks(state, data) {
            state.works = data
        },

        addWork(state, data) {
            state.works.push(data);
        },

        removeWork(state, id) {
            const record = state.services.findIndex(element => element.id == id)
            state.works.splice(record, 1)
        },

        updateWork(state, work) {
            const record = state.works.findIndex(element => element.id == work.id)
            state.works[record] = work
        }
    },
    getters: {
        worksList(state) {
            return state.works;
        },
    },
    actions: {
        addWork({ commit }, work) {

            const workJson  = JSON.stringify(work)

            Vue.prototype.$http.post('api/services', workJson).then( res => {
                const data = res.data

                if( data ) {
                    commit('addWork', work)
                }else {
                    alert('Não foi possível gravar serviço')
                }
            }).catch(err => {
                alert(err)
            })

        },
        loadData({ commit }) {
            Vue.prototype.$http.get('api/services').then( resp => {
                const data =  resp.data;

                if(data) {
                    commit('setWorks', data)

                }
            } ).catch(err => {
                alert(err);

            });
        },
        removeWork({ commit }, id) {
            commit('removeWork', id)
        },
        updateWork({ commit }, work) {
            commit('updateWork', work)
        },
    }

}