import Vue from 'vue'

export default {
    state: {
        categories: [],
    },
    mutations: {
        setCategories(state, data) {
            state.categories = data
            state.categories.unshift({id: 0, title:"Selecione uma categoria para seu serviço"})
        },

        addCategory(state, data) {
            state.categories.push(data);
        },

        removeCategory(state, id) {
            const record = state.categories.findIndex(element => element.id == id)
            state.categories.splice(record, 1)
        },

        updateCategory(state, category) {
            const record = state.categories.findIndex(element => element.id == category.id)
            state.categories[record] = category
        }


    },
    getters: {
        categoriesList(state) {
            return state.categories;
        },
        categoriesListSelectedOptions(state) {

            return  state.categories.map( category => {
                return {
                    item: category.id.toString(10),
                    name: category.title
                }
            })
        }
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

            Vue.prototype.$http.post('api/services/categories', JSON.stringify(category)).then( resp => {
                const dataResp = resp.data

                if(dataResp)
                    commit('addCategory', category)

            }).catch(err => {
                console.log(err)
            })
        },
        removeCategory({ commit }, id) {
            Vue.prototype.$http.delete(`api/services/categories/${id}`).then(resp => {
                const data = resp.data

                if(data) {
                    commit('removeCategory', id)
                }
            }).catch(err => {
                alert(JSON.stringify(err))
            } )

        },
        updateCategory({ commit }, category) {
            Vue.prototype.$http.put(`api/services/categories/${category.id}`, category).then( resp => {
                const data = resp.data;

                if(data)
                    commit('updateCategory', category)
            }).catch( err => {
                alert(err)
            })
        },

    }
}