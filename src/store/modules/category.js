import Vue from 'vue'

export default {
    state: {
        categories: [],
    },
    mutations: {
        setCategories(state, data) {
            state.categories = data
        },

        addCategory(state, data) {
            state.categories.push(data);
        },

    },
    getters: {
        categoriesList(state) {
            return state.categories;
        },
    },
    actions: {
        loadCategories({ commit }) {
            Vue.prototype.$http.get('api/services/categories').then( resp => {
                const data = resp.data
                commit('setCategories', data);
            } ).catch(err => {
                alert(err)
            })
        },
        addCategory({ commit }, category) {
            let categoryJson = JSON.stringify(category);
            Vue.prototype.$http.post('api/services/categories', categoryJson).then( res => {
                const data = res.data

                if(data) {
                    commit('addCategory', categoryJson)
                }
            }).catch(err => {
                alert(err)
            })
        }
    }
}